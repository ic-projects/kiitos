function addWebsite(funds) {
  if(EditingWebsites.find().fetch().length === 0) {
    contractInstance.startFund(funds, function(error, data) {
      if (error) {
        console.log("Error: " + error);
        return;
      }
      editing = false;
      $('.overlay').hide();
    });
  } else {
    url = EditingWebsites.find().fetch()[0].website;
    percentage = EditingWebsites.find().fetch()[0].percentage;
    EditingWebsites.remove(EditingWebsites.find().fetch()[0]._id);

    contractInstance.addWebsiteToFund(funds, url, percentage, function (error, data) {
      if (error) {
        console.log("Error: " + error);
        return;
      }
    });
  }
}

Meteor.startup(() => {
  editing = false;
  console.log("Making watchers");
  var myEvent = contractInstance.FundCreated({fromBlock: 'latest'}, function(error, result){
    if(error) {
      console.log("Error: " + error);
      return;
    }
    if(result.args.starter === web3.eth.defaultAccount && editing) {
      editingID = result.args.id;
      addWebsite(editingID);
    }
  });
  var myEvent2 = contractInstance.WebsiteAdded({fromBlock: 'latest'}, function(error, result){
    if(result.args.starter === web3.eth.defaultAccount && editing) {
      addWebsite(editingID);
    }
  });
});

Template.create.helpers({
  EditingWebsites: function() {
    return EditingWebsites.find();
  }
});

console.log("events");
Template.create.events({
  "click #submitAdd": function(event, template) {
    let url = template.find("#urlInput").value;
    let percent = parseInt(template.find("#percentInput").value);
    //addWebsite(url, percent);
    EditingWebsites.insert({
      website: url,
      percentage: percent
    });
  },
  "click #submitFundraiser": function(event, template) {
    //TODO check percents and stuff

    let name = template.find("#name").value;
    let matchPerHundredWei = parseInt(template.find("#matchPerHundredWei").value);
    let continueAfterEmpty = Boolean(template.find("#continueAfterEmpty").value);
    let maxMatch = parseInt(template.find("#maxMatch").value);

    contractInstance.numberOfFunds(function(error, result) {
      if (error) {
        console.log("Error: " + error);
        return;
      }
      let funds = parseInt(result);
      editing = true;
      $('.overlay').show();
      contractInstance.createFund.sendTransaction(name, matchPerHundredWei, continueAfterEmpty, {value: maxMatch}, function(error, data) {
        if (error) {
          console.log("Error: " + error);
          return;
        }
      });

    });



  }
});

