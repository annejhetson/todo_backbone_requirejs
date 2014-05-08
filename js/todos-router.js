var TodoApp = Backbone.Router.extend({
	routes: {
		"todos": 'index', "todos/:description": 'show'
	},


	index: function(){
		alert("got here");
		var todoList = new TodoList();
		this.todoList.fetch();
		alert("got here");
		var todoListView = new TodoListView({collection: todoList});
		todoListView.render();
		$('#container').append(todoListView.el);
	},

	show: function(description){
		alert("hell yea!");
	}

	// initialize: function(){
	// 	this.todoList = new TodoList();
	// 	this.todoListView = new TodoListView({ collection: this.todoList});
	// 	$('#container').append(this.todosView.el);

	// },
	// start: function(){
	// 	Backbone.history.start({pushState: true})
	// }
});

// $(function() { TodoApp.start()
  
  // Backbone.history.start({pushState: true});

  // $('a.todo').click(function(e){
  //   e.preventDefault();
      var router = new TodoApp();
      router.navigate("/todos", {
        trigger: true
      });
  // });
// });