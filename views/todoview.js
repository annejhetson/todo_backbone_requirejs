var TodoView = Backbone.View.extend({
  tagName: 'article',
  id: 'todo-view',
  classname: 'todo',

  template: _.template('<h4 class="<%= status %>">' +
                       '<input type=checkbox ' +
                        '<% if(status === "complete") print("checked") %> >' +
                        '<%= description %>: <%= status %></h4>'),


  initialize: function(){ // rerender item when status changed
    this.model.on('change', this.render, this);
    // this.model.on('destroy', this.remove, this);
  },

  remove: function(){
    this.$el.remove();
  },

  render: function(){
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
  },

  events: {
    "change input": 'toggleStatus' //run toggleStatus function when input changed
  },


  toggleStatus: function(){ //tell it to run toggleStatus function on model
    this.model.toggleStatus();
  }
});

var todoView = new TodoView({ model: todoItem });
todoView.render();
$('#container').append(todoView.el);
console.log(todoView.el);










var SimpleView = Backbone.View.extend({
  tagName: 'li',
  id: 'simple'
});

var simpleTodoView = new SimpleView();
console.log(simpleTodoView.el);
