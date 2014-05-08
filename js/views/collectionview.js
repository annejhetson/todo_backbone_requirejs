var TodoListView = Backbone.View.extend({
  el: '#container',
  events: {
    "click .new-todo": "createTodoOnEnter"
  },

  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
    this.collection.fetch();
    //not 100% sure about fetch and reset here
  },

  createTodoOnEnter: function(e){
    var newTodo = $('#new-todo').val();
    todoList.create({description: newTodo});
    //===SAME AS CODE BELOW===//
    // var todo = new TodoItem();
    // todo.set('description', newTodo);
    // todoList.add(todo);
    $('#new-todo').val(''); // clear input box
  },

  addOne: function(todoItem) {
    var todoView = new TodoView({model: todoItem});
    this.$el.append(todoView.render().el);
  },

  addAll: function(){
    this.$('#container').html('');
    this.collection.forEach(this.addOne, this);
  },

  render: function(){
    this.addAll();
  }
});

var todoListView = new TodoListView({collection: todoList});
todoListView.render();
$('#container').append(todoListView.el);
// console.log(todoListView.el);

// todoList.fetch();
