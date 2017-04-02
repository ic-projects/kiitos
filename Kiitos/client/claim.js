function claimWebsite(idFund, idWeb) {
  contractInstance.claimWebsite.sendTransaction(idFund, idWeb, {value: 1000000000000000}, function(error, data) {
    if (error) {
      console.log("Error: " + error);
      return;
    }
  });
}

Template.claim.events({
  "click #submitClaim": function (event, template) {
    let url = template.find("#websiteAddress").value.toLowerCase();
    console.log("claim");
    db = Fundraisers.find().fetch();
    for(let i = 0 ; i < db.length; i++) {
     for(let i2 = 0 ; i2 < db[i].websites.length; i2++) {
        if(db[i].websites[i2].url === url) {
          claimWebsite(db[i].no, db[i].websites[i2].no);
        }
      }
    }
  }
});
