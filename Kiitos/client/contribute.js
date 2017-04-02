Template.contribute.helpers({
  fundraisers: function() {
    return Fundraisers.find().fetch();
  },
  add: function(m, n) {
    return m + n;
  },
  weiToEth: function(wei) {
    return web3.fromWei(wei, 'ether');
  }
});

var selectedCard;

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
  contractInstance.contribute.sendTransaction(id, name, message, {value: parseInt(amount)}, function(error, data) {
    if (error) {
      waiting = false;
      console.log('Error in contribute: ' + error);
      return;
    }
    $('.overlay').hide();
  });
}