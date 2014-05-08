define(['jquery', 'backbone', 'models/todo'],
  function($, Backbone, todoItem){

  var TodoView = Backbone.View.extend({
    // tagName: 'article',
    // id: 'todo-view',
    // className: 'todo well',

//     template: _.template(todosTemplate), //use todos.html


    initialize: function(){
      console.log("todo views has been initialized");
      this.render();
//       this.model.on('change', this.render, this); // rerender item when status changed
//       this.model.on('destroy', this.remove, this);
//       this.model.on('hide', this.remove, this);
    },

    // remove: function(){
//       this.$el.remove();
    // },

    render: function(){
      console.log(this.model.get('description')+" Im from todoView!");

      this.$el.html("im from todoView");
    
//       var attributes = this.model.toJSON();
//       this.$el.html(this.template(attributes));
//       return this;
    },

//     events: {
//       "change input#checkbox": 'toggleStatus', //run toggleStatus function when input changed
//       "click .destroy": function() { this.model.destroy(); },
//       "dblclick h4": 'edit',
//       "click button.edit": 'updateItem'
//     },

//     updateItem: function(){
//       var updatedTodo = $('.editing input.edit').val();
//       this.model.set('description', updatedTodo);
//       this.model.save();
//       // updatedTodo = '';
//       this.$el.removeClass('editing');
//     },

//     edit: function(){
//       this.$el.addClass('editing');
//     },

//     toggleStatus: function(){ //tell it to run toggleStatus function on model
//       this.model.toggleStatus();
//       // debugger;
//       if(this.model.get('status') === 'complete') {
//         alert("Great Job!");
//         this.$el.addClass('complete');
//       } else {
//         this.$el.removeClass('complete');
//       }
//     }
  });
return TodoView;
});

// todoView.render();
// $('#container').append(todoView.render().el);
// console.log(todoView.render().el);










// var SimpleView = Backbone.View.extend({
//   tagName: 'li',
//   id: 'simple'
// });

// var simpleTodoView = new SimpleView();
// console.log(simpleTodoView.el);
