pragma solidity ^0.4.4;

contract Charity {

    address public owner;

    mapping(uint => Fundraiser) funds;
    uint public numberOfFunds;

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

    function Charity() {
		owner = msg.sender;
		numberOfFunds = 0;
	}

	function getFundraiserInfo1(uint id) constant returns
	(uint8, uint, bool, uint, uint) {
	    return (
	    funds[id].numberOfUrls,
	    funds[id].maxOwnerMatching,
	    funds[id].continueRaisingOverMax,
	    funds[id].matchingPer100Wei,
	    funds[id].currentDonated);
	}

	function getFundraiserInfo2(uint id) constant returns
	(uint, string, uint, address, bool) {
	    return (
	    funds[id].currentMatched,
	    funds[id].name,
	    funds[id].contributors.length,
	    funds[id].starter,
	    funds[id].isRunning);
	}

	function getWebsite(uint fund, uint8 web) constant returns
	(string, uint8, uint, uint) {
	    return (funds[fund].urls[web].url,
	    funds[fund].urls[web].percentage,
	    funds[fund].urls[web].amountToClaim,
	    funds[fund].urls[web].amountClaimed);
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
	}

	function contribute(uint id, string name, string message) payable {
	    if(msg.value == 0) {
	        throw;
	    }
	    if(funds[id].isRunning) {
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

	    Donation(msg.value, funds[id].name);
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


    event Donation(uint amount, string fundName);
}
