Contents = new Mongo.Collection('contents');

Contents.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	},
	remove: function(userId, doc) {
		return !!userId;
	}
});

Contents.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: 'Title',
		max: 50,
		autoform: {
      afFieldInput: {
        class: 'edit title',
				placeholder: 'Title',
				autofocus: true
      }
    }
	},
	subtitle: {
		type: String,
		label: 'Subtitle',
		max: 100,
		autoform: {
      afFieldInput: {
        class: 'edit sub title',
				placeholder: 'Subtitle'
      }
    }
	},
	heroTitle: {
		type: String,
		label: 'Hero Title',
		max: 100,
		autoform: {
      afFieldInput: {
        class: 'edit hero title',
				placeholder: 'Hero Title'
      }
    }
	},
	heroContent: {
		type: String,
		label: 'Hero Content',
		max: 200,
		autoform: {
      afFieldInput: {
        type: 'textarea',
        class: 'edit hero content',
				placeholder: 'Hero Content'
      }
    }
	},
	heroImage: {
		type: String,
		label: 'Hero Image',
		optional: true,
		autoform: {
      afFieldInput: {
        class: 'hero image',
				placeholder: 'Enter full image url...'
      }
    }
	},
	content: {
		type: String,
		label: 'Landing Page Content',
		optional: true,
		autoform: {
      afFieldInput: {
        type: 'textarea',
        class: 'edit content',
				placeholder: 'Write some markdown'
      }
    }
	},
	newsletter: {
		type: Boolean,
		label: 'Enable Newsletter',
		autoform: {
      afFieldInput: {
        class: 'newsletter toggle'
      }
    }
	},
	mailchimpAPI: {
		type: String,
		label: 'Mailchimp API Key',
		autoform: {
      afFieldInput: {
        class: 'newsletter api',
				placeholder: 'Enter Mailchimp API Key...'
      }
    }
	},
	mailchimpID: {
		type: String,
		label: 'Mailchimp ID',
		autoform: {
      afFieldInput: {
        class: 'newsletter id',
				placeholder: 'Enter Mailchimp List ID...'
      }
    }
	}
}));
