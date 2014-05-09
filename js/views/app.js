define(['jquery', 'underscore', 'backbone', 'views/todo', 'models/todo', 'collections/todos'],
	function($, _, Backbone, TodoView, TodoItem, TodoList){

		var AppView = Backbone.View.extend({
			el: '#container',

			initialize: function(){	
				this.todoList = new TodoList();
				this.todoList.on('add', this.render, this);
				this.todoList.fetch();
			},


			render: function(model){
					var todoView = new TodoView({model: model});
					$('#output').append(todoView.el);
			},

			events: {
			    "click .new-todo": "createTodoOnEnter"
		    },

		    createTodoOnEnter: function(e){
		      var newTodo = $('#new-todo').val();
		      this.todoList.create({description: newTodo});
	          $('#new-todo').val(''); // clear input box
	        }

		});
		return AppView;
	});
