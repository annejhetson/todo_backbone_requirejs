// Specify class for collection items
var TodoList = Backbone.Collection.extend({
  model: TodoItem,
  url : '/todos',
    
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

var todoList = new TodoList();
todoList.fetch();

var lotsoftodos = [
  {description: 'buy food'},
  {description: 'buy milk'},
  {description: 'buy juice'},
];

todoList.reset(lotsoftodos); //populate tasks from letsoftodos above

//alert each item in collection array
// todoList.forEach(function(item){
//   alert(item.get('description'));
// });

