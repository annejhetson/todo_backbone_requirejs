== TODO LIST 
Another version of simple todo app powered by Backbone.js.
This version uses localStorage adapter to store data and requireJS as follows:

require.config({
	paths: {
		jquery: 'libs/jquery/jquery-1.11.1',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
		localstorage: "libs/backbone.localStorage-min",
		text: 'libs/require/text'
	}
});

NOTE: text.js is not used in this app because of Chrome doesn't allow to load the file.


