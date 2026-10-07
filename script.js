const form = document.querySelector('form');
const input = document.querySelector('#input');
const Select = document.querySelector('Select');
const card = document.querySelector('.card');
const clear = document.querySelector('.clear-all')
const theme = document.querySelector('.theme')
const body = document.querySelector('body')

form.addEventListener('submit', (events) => {
    events.preventDefault();
    let inp1 =  input.value;
    let sel1 = Select.value;

    if(inp1.trim() === "") return;


    card.innerHTML += `<div class="study">
                            <div class="studyflex">
                            <div class="study-left">
                                <p id="std">${sel1}</p>
                            </div>
                            <div class="study-btn">
                                <button class="completed">Complete</button>
                                <button class="edit">Edit</button>
                                <button class="delete">Delete</button>
                            </div>
                            </div>
                            <div class="task-name">
                                <h3>Task:-${inp1}</h3>     
                            </div>
                            <div class="dataid">
                                
                                <p class="status">status : pending</p>

                            </div>
                        </div>`

    form.reset();
    updatecount();
});

card.addEventListener('click' , (e)=> {
    if(e.target.classList.contains('delete')){
        const taskBox = e.target.closest('.study')
        taskBox.remove();
    }
    if(e.target.classList.contains('edit')){
        const taskBox = e.target.closest('.study');
        const title = taskBox.querySelector('h3');
        
        const newName = prompt("Naya task naam likho:");
        
        if (newName) {
            title.innerText = `Task:-${newName}`;
        }
    }
 
    if(e.target.classList.contains('completed')){
    const taskBox = e.target.closest('.study');
    const status = taskBox.querySelector('.status');

    status.innerText = "status : completed";
    updatecount();
}
});

function updatecount(){
    const task = document.querySelectorAll(".study")

    let pending = 0;
    let completed = 0;
    
    task.forEach(task =>{
        const status = task.querySelector('.status').innerHTML;

        if(status.includes('pending')){
            pending++;
        }else if(status.includes('completed')){
            completed++;
        }
    });

    document.querySelector('#pending-count').innerHTML = pending;
    document.querySelector('#completed-count').innerHTML = completed;

}
clear.addEventListener('click', () => {
    const tasks = card.querySelectorAll('.study');

    tasks.forEach(task => {
        task.remove();
    });

    updatecount();
});

theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
