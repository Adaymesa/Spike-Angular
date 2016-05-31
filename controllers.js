toDoApp.controller("ToDoController", function(){
	var self = this;

	self.todos = [
		{task:'ToDo1', completed:true},
		{task:'ToDo2', completed:false}];

		self.addTodo = function(todoText) {
			self.todos.push( {task: todoText, completed: false} );
		};
		self.removeTodo = function() {
			self.todos.pop();
		}

	});
