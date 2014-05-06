var TodoListView = Backbone.View.extend({
  el: '#container',
  events: {
    "click button": "createTodoOnEnter"
  },

  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
    this.collection.fetch();
    //not 100% sure about fetch and reset here
  },


  createTodoOnEnter: function(e){
    var newTodo = $('#new-todo').val();
    // console.log(todoList.at(0).get('description'));
    todoList.create({description: newTodo});
    // var todo = new TodoItem();
    // todo.set('description', newTodo);
    // todoList.add(todo);


    // if(e.keyCode != 13) return;
    // if (!this.$el.find("#new-todo").val()) return;
    //     this.todoList.create({title: this.$el.find("#new-todo").val(),completed: false}); // sync new model and add to our Todos collection
    //     this.$el.find("#new-todo").val(''); //clear input box
    //     return this;
    // },

  // newAttr: function(){
  //   return {
  //     title: this.input.val().trim(),
  //     completed: false
  //   }
  },
  //when run

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
