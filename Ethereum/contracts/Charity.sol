pragma solidity ^0.4.4;
import "./usingOraclize.sol";

contract Charity is usingOraclize {

    address public owner;

    mapping(uint => Fundraiser) funds;
    uint public numberOfFunds;
    mapping(bytes32 => Request) requests;

    struct Request {
        uint fundID;
        uint8 webID;
    }

    struct Fundraiser {
        mapping(uint8 => Website) urls;
        uint8 numberOfUrls;
        uint maxOwnerMatching;
        bool continueRaisingOverMax;
        uint matchingPer100Wei; //in wei
        uint currentDonated;
        uint currentMatched;
        string name;
        Contributor[] contributors;
        address starter;
        bool isRunning;
    }

    struct Contributor {
        string name;
        uint amount;
        string message;
    }

    struct Website {
        string url;
        uint8 percentage;
        uint amountToClaim;
        uint amountClaimed;
    }

/*------------------------------------------------------------------------------
    OWNER - CREATION FUNCTIONS
------------------------------------------------------------------------------*/

    function Charity() {
    OAR = OraclizeAddrResolverI(0x6f485c8bf6fc43ea212e93bbf8ce046c7f1cb475);
        owner = msg.sender;
        numberOfFunds = 0;
    }

    function createFund(
        string name,
        uint matchingPer100Wei,
        bool continueRaisingOverMax) payable
    {
        if(bytes(name).length < 5) {
            throw;
        }

        funds[numberOfFunds].starter = msg.sender;
        funds[numberOfFunds].name = name;
        funds[numberOfFunds].maxOwnerMatching = msg.value;
        funds[numberOfFunds].matchingPer100Wei = matchingPer100Wei;
        funds[numberOfFunds].continueRaisingOverMax = continueRaisingOverMax;

        FundCreated(msg.sender, name, numberOfFunds);
        numberOfFunds++;
    }

    function addWebsiteToFund(uint id, string url, uint8 percentage) {
        if(funds[id].starter != msg.sender) {
            throw;
        }
        if(funds[id].isRunning) {
            throw;
        }
        if(percentage == 0) {
            throw;
        }

        funds[id].urls[funds[id].numberOfUrls].url = url;
        funds[id].urls[funds[id].numberOfUrls].percentage = percentage;
        funds[id].numberOfUrls++;
        WebsiteAdded(msg.sender, funds[id].name, url);
    }

    function startFund(uint id) {
        if(funds[id].starter != msg.sender) {
            throw;
        }
        if(funds[id].isRunning) {
            throw;
        }

        uint8 total = 0;
        for(uint8 i = 0; i < funds[id].numberOfUrls; i++) {
            total += funds[id].urls[i].percentage;
        }
        if(total != 100) {
            throw;
        }


        funds[id].isRunning = true;
        FundStarted(msg.sender, funds[id].name);
    }

/*------------------------------------------------------------------------------
    OWNER - EDITING FUNCTIONS
------------------------------------------------------------------------------*/

    function refundOwner(uint id, uint refundAmount) {
        if(funds[id].starter != msg.sender) {
            throw;
        }
        if(refundAmount > (funds[id].maxOwnerMatching
                            - funds[id].currentMatched)) {
            throw;
        }

        funds[id].maxOwnerMatching -= refundAmount;

        if (!funds[id].starter.send(refundAmount)) {
            funds[id].maxOwnerMatching += refundAmount;
        } else {
            RefundFund(msg.sender, funds[id].name , refundAmount);
        }
    }

    function topUpOwner(uint id) payable {
        if(funds[id].starter != msg.sender) {
            throw;
        }

        funds[id].maxOwnerMatching += msg.value;
        TopUpFund(msg.sender, funds[id].name , msg.value);
    }

/*------------------------------------------------------------------------------
    USER - GET FUNDRAISER INFO FUNCTIONS
------------------------------------------------------------------------------*/

    function getFundraiserInfo1(uint id) constant returns
    (uint8, uint, bool, uint, uint, uint) {
        return (
        funds[id].numberOfUrls,
        funds[id].maxOwnerMatching,
        funds[id].continueRaisingOverMax,
        funds[id].matchingPer100Wei,
        funds[id].currentDonated,
        id);
    }

    function getFundraiserInfo2(uint id) constant returns
    (uint, string, uint, address, bool, uint) {
        return (
        funds[id].currentMatched,
        funds[id].name,
        funds[id].contributors.length,
        funds[id].starter,
        funds[id].isRunning,
        id);
    }

    function getWebsite(uint fund, uint8 web) constant returns
    (string, uint8, uint, uint, uint, uint) {
        return (funds[fund].urls[web].url,
        funds[fund].urls[web].percentage,
        funds[fund].urls[web].amountToClaim,
        funds[fund].urls[web].amountClaimed,
        fund,
        web);
    }

    function getContributer(uint fund, uint cid) constant returns
    (string, uint, string, uint, uint) {
        return (funds[fund].contributors[cid].name,
        funds[fund].contributors[cid].amount,
        funds[fund].contributors[cid].message,
        fund,
        cid);
    }

/*------------------------------------------------------------------------------
    USER - DONATION FUNCTIONS
------------------------------------------------------------------------------*/

    function contribute(uint id, string name, string message) payable {
        if(msg.value == 0) {
            throw;
        }
        if(!funds[id].isRunning) {
            throw;
        }
        if(!funds[id].continueRaisingOverMax &&
        funds[id].currentMatched >= funds[id].maxOwnerMatching) {
            throw;
        }

        uint toMatch = (msg.value * funds[id].matchingPer100Wei) / 100;
        if(funds[id].currentMatched + toMatch > funds[id].maxOwnerMatching) {
            toMatch = funds[id].maxOwnerMatching - funds[id].currentMatched;
            funds[id].currentMatched += toMatch;
            funds[id].currentDonated += msg.value;
            updateWebsites(id, toMatch+msg.value);
        } else {
            funds[id].currentMatched += toMatch;
            funds[id].currentDonated += msg.value;
            updateWebsites(id, toMatch+msg.value);
        }

        Donation(msg.sender, msg.value, funds[id].name);
        funds[id].contributors.push(Contributor(name, msg.value, message));
    }

    function updateWebsites(uint id, uint amount) private {
        uint toTake;
        uint totalTaken = 0;
        for(uint8 i = 0; i < funds[id].numberOfUrls; i++) {
            toTake = (amount * funds[id].urls[i].percentage) / 100;
            totalTaken += toTake;
            funds[id].urls[i].amountToClaim += toTake;
        }
        funds[id].urls[0].amountToClaim += amount - totalTaken;
    }



/*------------------------------------------------------------------------------
    CHARITY - CLAIMING FUNCTIONS
------------------------------------------------------------------------------*/

    function claimWebsite(uint fund, uint8 web) payable{
        if(msg.value != 1000000000000000) {
            //0.001 eth fee
            throw;
        }
        if(funds[fund].urls[web].amountToClaim == 0) {
            throw;
        }


        bytes32 myid = oraclize_query(
            "URL",
            stringConcat(funds[fund].urls[web].url,"/address.kiitos"));

       requests[myid] = Request(fund, web);
    }

    function stringConcat(string _a, string _b) internal constant
    returns (string){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        string memory abcde = new string(_ba.length + _bb.length);
        bytes memory babcde = bytes(abcde);
        uint k = 0;
        for (uint i = 0; i < _ba.length; i++) babcde[k++] = _ba[i];
        for (i = 0; i < _bb.length; i++) babcde[k++] = _bb[i];
        return string(babcde);
    }

/*------------------------------------------------------------------------------
    ORACLE FUNCTIONS
------------------------------------------------------------------------------*/

    event oracleResult(bytes32 id, string result);
    function __callback(bytes32 myid, string result) {
        if (msg.sender != oraclize_cbAddress()) {
            throw;
        }

        oracleResult(myid, result);

        if(stringEquals(result,"")) {
            throw;
        }
        address toSend = parseAddr(result);
        if(toSend == 0x0000000000000000000000000000000000000000) {
            throw;
        }

        uint tmp = funds[requests[myid].fundID].urls[requests[myid].webID]
                   .amountToClaim;
        funds[requests[myid].fundID].urls[requests[myid].webID]
            .amountToClaim = 0;
        funds[requests[myid].fundID].urls[requests[myid].webID]
            .amountClaimed += tmp;

        if(!toSend.send(tmp)) {
            funds[requests[myid].fundID].urls[requests[myid].webID]
                .amountToClaim = tmp;
            funds[requests[myid].fundID].urls[requests[myid].webID]
                .amountClaimed -= tmp;
        }
    }

      function stringEquals(string sa, string sb) returns (bool) {
          bytes memory a = bytes(sa);
          bytes memory b = bytes(sb);
        if (a.length != b.length) {
            return false;
        }
        for (uint i = 0; i < a.length; i ++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }


    event Donation(address starter, uint amount, string fundName);
    event FundCreated(address starter, string name, uint id);
    event WebsiteAdded(address starter, string name, string url);
    event FundStarted(address starter, string name);
    event TopUpFund(address starter, string name, uint amount);
    event RefundFund(address starter, string name, uint amount);
}
