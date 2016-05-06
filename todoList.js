var todos = [];
var input = prompt("What would you like todo? ('new', 'list', 'quit')");

while(input !== "quit"){
	
	if(input === "list"){
		listTodos();
	}

	else if(input === "new"){
		addTodo();
	}
	else if(input === "delete"){
		deleteTodo();
	}

	input = prompt("What would you like todo? ('new', 'list', 'quit')");
}
console.log("You Quit the App!");

function listTodos(){
	console.log("************");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("************")
}

function addTodo(){
	var newTodo = prompt("New List Item:");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo(){
	var index = prompt("Enter index of Todo to delete:");
	todos.splice(index, 1);
	console.log("Todo at index " + index + " has been deleted from the list.");
}