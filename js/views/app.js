define(['jquery', 'backbone', 'views/todo', 'models/todo'], function($, Backbone, TodoView, TodoItem){

		var AppView = Backbone.View.extend({
			el: '#output',

			initialize: function(){
				this.render();
			},
			render: function(){
				console.log("before todoItem");
				var todoItem = new TodoItem({description: 'shopping'});
				console.log("before todoView");
				var todoView = new TodoView({model: todoItem});
				this.$el.html(todoView.el);

			}

		});
		return AppView;
	});
