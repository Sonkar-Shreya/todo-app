// input me input store hoga

// const input=document.getElementById("inputArea");

// add button ko click krege to input ko array m store krega
let array=[];
array = getTodos();
display();
const addButton=document.getElementById("addButton");
addButton.addEventListener("click",addTodo);

function addTodo(){
	let input=document.getElementById("inputArea").value;
    array.push(input);
    setTodos();
    document.getElementById("inputArea").value="";
	// alert("you clicked");
	display();
	
}

function display(){
	document.getElementById("todoList").innerHTML="";
    
// todo ko list m add krege to display hoga

	for(const task of array){

		const createLi=document.createElement("li");
		createLi.innerHTML=task;
		const closeButton=document.createElement("button");
		closeButton.innerHTML='X';
		createLi.appendChild(closeButton);
		closeButton.id=task;

		document.getElementById("todoList").appendChild(createLi);

        closeButton.addEventListener("click",closeBtn);

	}
}

function closeBtn(e){
	const taskId=e.target.id;
	array = array.filter((task) => task!=taskId);	
	setTodos();
	display();
}

//sbse phle array ko string m covert krege
// fir local storage m set krege
// fir storage se get krege
// fir parse krege 

function getTodos(){
	// local storege se todo list lekr aayega
	let str = localStorage.getItem("todo");
	let aray = [];
	if(str){
		aray=JSON.parse(str);
	}
	return aray;
}

function setTodos(){

	localStorage.setItem("todo",JSON.stringify(array));
}






	