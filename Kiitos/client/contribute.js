Template.contribute.helpers({
  fundraisers: function() {
    console.log(Fundraisers.find().fetch());
    return Fundraisers.find();
  },
  add: function(m, n) {
    return m + n;
  },
  weiToEth: function(wei) {
    return web3.fromWei(wei, 'ether');
  }
});

Template.contribute.events({
  'click .claim': function(event, template) {
    var target = $(event.target);

  }
});

function claimWebsite(idFund, idWeb) {

}