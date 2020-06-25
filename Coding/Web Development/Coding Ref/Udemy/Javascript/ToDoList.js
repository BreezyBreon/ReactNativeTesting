window.setTimeout(function() {

var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?")

while(input !== "quit"){
	if (input === "list"){
		printList();
	} else if (input === "new") {
		addTodo();
	} else if (input === "delete"){
		deleteTodo();
	}
	input = prompt("What would you like to do?")
}
console.log("Ok, you quite the app");


function printList(){
	console.log("********");
	todos.forEach(function(todo, index){
		console.log(index + ": "+ todo);
		});
	console.log("********");
	}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log(newTodo + " added to list")
	}

function deleteTodo(){
	var index = prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Todo Removed")
	}

}, 500);
