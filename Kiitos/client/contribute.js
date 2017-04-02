Template.contribute.helpers({
  fundraisers: function() {
    return Fundraisers.find().fetch();
  },
  add: function(m, n) {
    return m + n;
  },
  weiToEth: function(wei) {
    return web3.fromWei(wei, 'ether');
  },
  round: function(n) {
    return parseInt(n).toFixed(2);
  }
});

Template.contribute.events({
  'click .card': function(event, template) {
    selectedCard = $(event.target).closest('.card');
    $('#contributeModal').modal('show');
  },
  'click #submitContribution': function() {
    id = selectedCard.attr('fundraiser-id');
    name = $('#contributionName').val();
    message = $('#contributionMessage').val();
    amount = $('#contributionAmount').val();
    contribute(id, name, message, amount);
  }
});

function contribute(id, name, message, amount) {
  $('.overlay').show();
  waiting = true;
  contractInstance.contribute.sendTransaction(id, name, message, {value: web3.toWei(amount, 'ether')}, function(error, data) {
    if (error) {
      waiting = false;
      console.log('Error in contribute: ' + error);
      return;
    }
    $('.overlay').hide();
  });
}