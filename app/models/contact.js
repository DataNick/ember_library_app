import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  emailValid: Ember.computed.match('email', /^.+@.+\..+$/),

  messageValid: Ember.computed.gte('message.length', 5),

  bothValid: Ember.computed.and('emailValid', 'messageValid'),

  isDisabled: Ember.computed.not('bothValid'),

});
