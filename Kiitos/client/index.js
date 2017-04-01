import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.index.onCreated(function() {
  this.currentPage = new ReactiveVar('home');
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
    selectedLink.add('active');
    template.currentPage.set(selectedLink.data('template'));
  }
});