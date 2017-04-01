import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

abi = [
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

Fundraisers = new Mongo.Collection(null);

Meteor.startup(() => {
  updateFundraisers();
});

function updateFundraisers() {
  contractInstance.revealedBetsIndex(function (error, result) {
    if (error) {
      console.log("Error: " + error);
      return;
    }

    // Resets the RevealedBets collection
    RevealedBets.remove({});

    // Build up the list of RevealedBets objects
    for (i = 0; i < parseInt(result); i++) {
      contractInstance.getRevBetIndex(i, function (error, result2) {
        if (error) {
          console.log("Error: " + error);
          return;
        }

        RevealedBets.insert({
          address: result2[0],
          start: web3.fromWei(parseInt(result2[1]), 'ether'),
          end: web3.fromWei(parseInt(result2[2]), 'ether')
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