var TodoListView = Backbone.View.extend({
  // initialize: function(){
  //   this.collection.on('add', this.addOne, this);
  // },

  
  render: function(){
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(todoItem) {
    var todoView = new TodoView({model: todoItem});
    this.$el.append(todoView.render().el);
  }


});

var todoListView = new TodoListView({collection: todoList});
todoListView.render();
$('#container').append(todoListView.el);
console.log(todoListView.el);
