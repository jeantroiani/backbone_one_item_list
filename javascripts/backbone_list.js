var ToDo = Backbone.Model.extend({
  initialize: function(){
    console.log('A new instance have been created');
  },
  defaults: {
    description: 'nothing to do',
    status: 'completed'
  }
});


var toDo1 = new ToDo(
  { description: 'Buy Milk', status:'incomplete'}
);

var toDo2 = new ToDo(
  { description: 'Dentist', status:'incomplete'}
);

console.log(toDo1.toJSON());
console.log(toDo1.set('description','buy Oreos'));
console.log(toDo1.get('description'));




var ListView = Backbone.View.extend({
  el: 'li',
  initialize: function(){
  this.render();
  },
  render: function(){
    this.$el.text(this.model.get('description'));
  }
});


var toDoView = new ListView({
   model: toDo1
});
    

var ToDoList = Backbone.Collection.extend({
  model: ToDo
});

var list = new ToDoList([toDo1,toDo2]);
 


