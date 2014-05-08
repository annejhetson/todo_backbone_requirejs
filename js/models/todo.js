define(['jquery', 'backbone'], function($,Backbone){

  var TodoItem = Backbone.Model.extend({
    urlRoot: '/todo',

    defaults: {
      description: 'Nothing',
      status: 'incomplete'
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





// TEST update description

// set alert function when description is changed
// todoItem.on('change', function() {
//   alert('description changed to ' + this.get('description'));
// });

// todoItem.set('description', 'buy grocery');



