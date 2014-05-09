define(['backbone', 'localstorage', 'models/todo'],
  function(Backbone, Store, TodoItem) {
// Specify class for collection items
  
  var TodoList = Backbone.Collection.extend({
    model: TodoItem,
    localStorage: new Store("backbone-todo"),

    initialize: function() {
  	this.on('remove', this.hideModel);
    },

    //when remove event is fired, run hide model
    //then trigger hide event and remove item from view
    //TRY todoList.remove(todoList.at(0)) to see the first item
    //gets removed in action
    hideModel: function(model){
      model.trigger('hide');
    }
  });
  return TodoList;
});
