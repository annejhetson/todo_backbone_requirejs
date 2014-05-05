var TodoItem = Backbone.Model.extend({
  urlRoot: 'todos/',

  defaults: {
    description: 'Nothing',
    status: 'incomplete'
  }
});

var todoItem = new TodoItem();
  // { description: "Feed the dog", status: "incomplete", id: 1 }

// set alert function when description is changed
todoItem.on('change', function() {
  alert('description changed to ' + this.get('description'));
});

// update description
todoItem.set('description', 'buy grocery');



