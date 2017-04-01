import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './contribute.js';
import './create.js';
import './home.js';

abi =  [
  {
    "constant": true,
    "inputs": [
      {
        "name": "fund",
        "type": "uint256"
      },
      {
        "name": "cid",
        "type": "uint256"
      }
    ],
    "name": "getContributer",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "myid",
        "type": "bytes32"
      },
      {
        "name": "result",
        "type": "string"
      }
    ],
    "name": "__callback",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getFundraiserInfo2",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "fund",
        "type": "uint256"
      },
      {
        "name": "web",
        "type": "uint8"
      }
    ],
    "name": "claimWebsite",
    "outputs": [],
    "payable": true,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "myid",
        "type": "bytes32"
      },
      {
        "name": "result",
        "type": "string"
      },
      {
        "name": "proof",
        "type": "bytes"
      }
    ],
    "name": "__callback",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "refundAmount",
        "type": "uint256"
      }
    ],
    "name": "refundOwner",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "url",
        "type": "string"
      },
      {
        "name": "percentage",
        "type": "uint8"
      }
    ],
    "name": "addWebsiteToFund",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getFundraiserInfo1",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "message",
        "type": "string"
      }
    ],
    "name": "contribute",
    "outputs": [],
    "payable": true,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "startFund",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "fund",
        "type": "uint256"
      },
      {
        "name": "web",
        "type": "uint8"
      }
    ],
    "name": "getWebsite",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint8"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "numberOfFunds",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "topUpOwner",
    "outputs": [],
    "payable": true,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "matchingPer100Wei",
        "type": "uint256"
      },
      {
        "name": "continueRaisingOverMax",
        "type": "bool"
      }
    ],
    "name": "createFund",
    "outputs": [],
    "payable": true,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "sa",
        "type": "string"
      },
      {
        "name": "sb",
        "type": "string"
      }
    ],
    "name": "stringEquals",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "result",
        "type": "string"
      }
    ],
    "name": "oracleResult",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "fundName",
        "type": "string"
      }
    ],
    "name": "Donation",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "starter",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "string"
      }
    ],
    "name": "FundCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "starter",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "url",
        "type": "string"
      }
    ],
    "name": "WebsiteAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "starter",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "string"
      }
    ],
    "name": "FundStarted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "starter",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "TopUpFund",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "starter",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "RefundFund",
    "type": "event"
  }
];
contractAddress = '0x7a1e1ded2fabcfe87af12ee7b8d7303b0e63c303';
Contract = web3.eth.contract(abi);
contractInstance = Contract.at(contractAddress);
editingID = 0;
Fundraisers = new Mongo.Collection(null);

Meteor.startup(() => {
  updateFundraisers();
  var events = contractInstance.allEvents({fromBlock:'latest'}, function(error, result){
    //$.notify(result.event+"");
    switch(result.event.toLowerCase()) {
      case "fundcreated": {
        //updateWinnerTable();
        if (result.args.starter == web3.eth.defaultAccount) {
          //editingID = result.args.id;
        }
        break;
      }
      case "websiteadded": {
        //updateWinnerTable();
        if (result.args.starter == web3.eth.defaultAccount) {

        }
        break;
      }
      case "fundstarted": {
        //updateWinnerTable();
        if (result.args.starter == web3.eth.defaultAccount) {

        }
        break;
      }
      case "topupfund": {
        //updateWinnerTable();
        if (result.args.starter == web3.eth.defaultAccount) {

        }
        break;
      }
      case "refundfund": {
        //updateWinnerTable();
        if (result.args.starter == web3.eth.defaultAccount) {

        }
        break;
      }
    }});
});

function updateFundraisers() {
  Fundraisers = new Mongo.Collection(null);
  contractInstance.numberOfFunds(function (error, result) {
    if (error) {
      console.log("Error: " + error);
      return;
    }
    console.log(result);
    for (i = 0; i < parseInt(result); i++) {
      //Get each Fundraiser
      console.log(i)
      contractInstance.getFundraiserInfo1(i, function(error, result2) {
        if (error) {
          console.log("Error: " + error);
          return;
        }
        
        contractInstance.getFundraiserInfo2(parseInt(result2[5]), function(error, result3) {
          if (error) {
            console.log("Error: " + error);
            return;
          }

          Fundraisers.insert({
            no: parseInt(result3[5]),
            numberOfUrls: parseInt(result2[0]),
            maxOwnerMatching: web3.fromWei(parseInt(result2[1]), 'ether'),
            continueRaisingOverMax: Boolean(result2[2]),
            matchingPer100Wei: parseInt(result2[3]),
            currentDonated: web3.fromWei(parseInt(result2[4]), 'ether'),
            currentMatched: web3.fromWei(parseInt(result3[0]), 'ether'),
            name: result3[1],
            numberOfContributors: parseInt(result3[2]),
            starter: result3[3],
            isRunning: Boolean(result3[4]),
            websites: [],
            contributors: []
          });

          //Build a list of websites
          for (i2 = 0; i2 < parseInt(result2[0]); i2++) {
            contractInstance.getWebsite(parseInt(result2[5]), i2, function (error, result4) {
              if (error) {
                console.log("Error: " + error);
                return;
              }

              Fundraisers.update({ "no": parseInt(result4[4]) },
                { $push: { websites: {
                  no: parseInt(result4[5]),
                  url: result4[0],
                  percentage: parseInt(result4[1]),
                  amountToClaim:  parseInt(result4[2]),
                  amountClaimed:  parseInt(result4[3])
                }}});

            });
          }

          //Build a list of contributors
          for (i2 = 0; i2 < parseInt(result3[2]); i2++) {
            contractInstance.getContributer(parseInt(result2[5]), i2, function (error, result4) {
              if (error) {
                console.log("Error: " + error);
                return;
              }

              Fundraisers.update({ "no": parseInt(result4[4]) },
                { $push: { contributors: {
                  no: parseInt(result4[4]),
                  name: result4[0],
                  amount: parseInt(result4[1]),
                  message:  result4[2]
                }}});
            });
          }
        });
      });
    }
  });
}
Template.index.onCreated(function() {
  this.currentPage = new ReactiveVar('create');
});

Template.index.helpers({
  page: function() {
    return Template.instance().currentPage.get();
  }
});

Template.index.events({
  'click nav ul li': function(event, template) {
    $('nav ul li').removeClass('active');

    let selectedLink = $(event.target).closest('li');
    selectedLink.addClass('active');
    template.currentPage.set(selectedLink.data('template'));
  }
});