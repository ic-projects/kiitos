import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

abi = [];
contractAddress = '0x7a1e1ded2fabcfe87af12ee7b8d7303b0e63c303';
Contract = web3.eth.contract(abi);
contractInstance = Contract.at(contractAddress);

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