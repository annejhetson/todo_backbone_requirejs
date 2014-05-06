var TodoListView = Backbone.View.extend({
  // initialize: function(){
  //   this.collection.on('add', this.addOne, this);
  // },

  addOne: function(todoItem) {
    var todoView = new TodoView({model: todoItem});
    this.$el.append(todoView.render().el);
  },

  render: function(){
    this.collection.forEach(this.addOne, this);
  }

});

var todoListView = new TodoListView({collecton: todoList});
todoListView.render();
console.log(todoListView.el);
