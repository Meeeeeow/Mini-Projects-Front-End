const form = document.getElementById("form");
const input = document.getElementById("input");
const todoEl = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("Todos"));

if(todos){
    todos.forEach(tasks =>{
        addTodo(tasks);
    });
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    addTodo();
});

function addTodo(tasks){
    let todo = input.value;
    if(tasks){
        todo = tasks.text;
        console.log(todo);
    }
    if(todo){
            const todoNew = document.createElement("li");
            
            
            if(tasks && tasks.completed)
            {
                todoNew.classList.add("completed");
            }
            todoNew.addEventListener("click", () =>{

                todoNew.classList.toggle("completed");
                updateLS();
            });

            todoNew.innerText = todo;

            todoNew.addEventListener("contextmenu", (e) =>{
                e.preventDefault();

                todoNew.remove();
                updateLS();
            });
            todoEl.appendChild(todoNew);

            input.value = "";    
            updateLS();  
        }
    }
    


function updateLS(){
    const noteAll = document.querySelectorAll("li");
    const notes=[];
    noteAll.forEach(note =>{
        notes.push({
            text: note.innerHTML,
            completed: note.classList.contains("completed")
        });
    });
    console.log(notes);
    localStorage.setItem("Todos",JSON.stringify(notes));
}