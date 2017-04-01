function createFund(name, matchPerHundredWei, continueAfterEmpty, maxMatch) {
  // TODO: Show spinner
  contractInstance.createFund.sendTransaction(name, matchPerHundredWei, continueAfterEmpty, {value: maxMatch}, function() {
    // TODO: Close spinner
  });
}
