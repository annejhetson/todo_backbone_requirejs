var TodoListView = Backbone.View.extend({
  
  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
    
    //not 100% sure about fetch and reset here
  },
  //when run 
  
  addOne: function(todoItem) {
    var todoView = new TodoView({model: todoItem});
    this.$el.append(todoView.render().el);
  },

  addAll: function(){
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
