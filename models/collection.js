// Specify class for collection items
var TodoList = Backbone.Collection.extend({
  model: TodoItem,
  url : '/todos'
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
