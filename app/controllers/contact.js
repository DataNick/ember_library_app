import Ember from 'ember';

export default Ember.Controller.extend({
  isDisabled: Ember.computed.not('bothValid'),

  emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  messageValid: Ember.computed.gte('message.length', 5),

  bothValid: Ember.computed.and('emailValid', 'messageValid'),



  actions: {
    messageSent(){
      console.log("Success!!");
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')} ${this.get('message')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')} ${this.get('message')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
