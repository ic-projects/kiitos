function createFund(name, matchPerHundredWei, continueAfterEmpty, maxMatch) {
  $('.overlay').show();
  contractInstance.createFund.sendTransaction(name, matchPerHundredWei, continueAfterEmpty, {value: maxMatch}, function(error, data) {
    if (error) {
      return;
    }
    $('.overlay').hide();
    editing = true;
  });
}
editing = false;


function addWebsite(url, percentage) {
  $('.overlay').show();
  contractInstance.addWebsiteToFund(editingID, url, percentage, {value: maxMatch}, function(error, data) {
    if (error) {
      return;
    }
    $('.overlay').hide();
  });
}

function startFund() {
  $('.overlay').show();
  contractInstance.startFund(editingID, {value: maxMatch}, function(error, data) {
    if (error) {
      return;
    }
    $('.overlay').hide();
    editing = false;
  });
}


