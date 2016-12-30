import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    messageSent(){
      console.log("Success!!");
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')} ${this.get('message')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')} ${this.get('message')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    },

    saveContact(newContact) {
      newContact.save().then((response) => {
        this.refresh();
      })
    },

    willTransition() {
          let model = this.controller.get('model');

          if (model.get('isNew')) {
            model.destroyRecord();
          }

          this.controller.set('responseMessage', false);
        }

  }

});
