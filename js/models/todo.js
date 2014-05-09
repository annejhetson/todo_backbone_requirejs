define(['jquery', 'backbone'], function($,Backbone){

  var TodoItem = Backbone.Model.extend({
    urlRoot: '/todo',

    defaults: {
      description: 'Nothing',
      status: 'incomplete'
    },

    initialize: function(){
      // alert(this.get('description')+" is initialized");
    },

    toggleStatus: function(){

      // alert("that tickles!");
      if(this.get('status') == 'incomplete'){
        this.set('status', 'complete');
      } else {
        this.set('status', 'incomplete');
      }
      this.save();
    }
  });
  return TodoItem;
    
});


