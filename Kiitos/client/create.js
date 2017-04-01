function createFund(name, matchPerHundredWei, continueAfterEmpty, maxMatch) {
  $('.overlay').show();
  contractInstance.createFund.sendTransaction(name, matchPerHundredWei, continueAfterEmpty, {value: maxMatch}, function(error, data) {
    if (error) {
      return;
    }
    contractInstance.addWebsite()
    $('.overlay').hide();
  });
}
