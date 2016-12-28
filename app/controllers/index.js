import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: Ember.computed.not('isValid'),

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  headerMessage: 'Coming Soon',

  responseMessage: '',

  emailAddress: '',

  actualEmailAddress: Ember.computed('emailAddress', function() { 
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: Ember.observer('emailAddress', function() { 
    console.log('observer is called', this.get('emailAddress')); 
  }),

  actions: {
    saveInvitation() {
      console.log("Success!!");
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email: email });
            newInvitation.save().then(function(response){
              this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
              this.set('emailAddress', '');
            }.bind(this));
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
    }
  }

});
