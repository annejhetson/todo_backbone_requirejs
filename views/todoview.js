var TodoView = Backbone.View.extend({
  tagName: 'article',
  id: 'todo-view',
  className: 'todo',

  template: _.template('<h3 class="<%= status %>">' +
                       '<input type=checkbox id="checkbox"' +
                        '<% if(status === "complete") print("checked") %> >' +
                        '<%= description %>: <%= status %></h3><input class="edit" placeholder="<%= description %>">' +
                        '<button class="edit btn-info">update</button> <a href="#<%= description %>" class="todo">  ✈ </a>' +
                        '<button class="destroy btn-danger">remove</button>'),


  initialize: function(){
    this.model.on('change', this.render, this); // rerender item when status changed
    this.model.on('destroy', this.remove, this);
    this.model.on('hide', this.remove, this);
  },

  remove: function(){
    this.$el.remove();
  },

  render: function(){
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
    return this;
  },

  events: {
    "change input#checkbox": 'toggleStatus', //run toggleStatus function when input changed
    "click .destroy": function() { this.model.destroy(); },
    "dblclick h3": 'edit',
    "click button.edit": 'updateItem'
  },

  updateItem: function(){
    var updatedTodo = $('.editing input.edit').val();
    this.model.set('description', updatedTodo);
    this.model.save();
    // updatedTodo = '';
    this.$el.removeClass('editing');
  },

  edit: function(){
    this.$el.addClass('editing');
  },

  toggleStatus: function(){ //tell it to run toggleStatus function on model
    this.model.toggleStatus();
  }
});

var todoView = new TodoView({ model: todoItem });
// todoView.render();
// $('#container').append(todoView.render().el);
// console.log(todoView.render().el);










// var SimpleView = Backbone.View.extend({
//   tagName: 'li',
//   id: 'simple'
// });

// var simpleTodoView = new SimpleView();
// console.log(simpleTodoView.el);
