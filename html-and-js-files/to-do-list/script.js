
const botaoAdd = document.getElementById('button-list');
const botaoRemove = document.getElementById('button-remove');

let todolist = document.getElementById('todolist'); 


function createTask() {

    const data = document.getElementById('input-list').value;
    

    if (!data){return} 
        else{
            
            //const todolist = document.getElementById('todolist'); // Cria o objeto que contém a minha lista
            let taskContainer = document.createElement('div');
            let newTask = document.createElement('input');
            let taskLabel = document.createElement('label');
            let taskDescription = document.createTextNode(data);

            newTask.setAttribute('type','checkbox');
            newTask.setAttribute('name',data);
            newTask.setAttribute('id',data);

            taskLabel.setAttribute('for', data);
            taskLabel.appendChild(taskDescription);
         
            taskContainer.classList.add('task-item');
            taskContainer.setAttribute('name',data);
            taskContainer.appendChild(newTask);
            taskContainer.appendChild(taskLabel);

            todolist.appendChild(taskContainer);

            

        }

};

function removeTask(){

    let arr = [];

    for(item of todolist.children){
        
        if(item.firstChild.checked === true){

            arr.push(item);
        } 
    }

    arr.map((item)=>{todolist.removeChild(item)});
};


botaoAdd.addEventListener('click',createTask);
botaoRemove.addEventListener('click',removeTask);
