const addtask = document.getElementById('addtask');
const newtask = document.getElementById('newtask');
const tasklist = document.querySelector('.taskList');

function addToDom(todos) {
    tasklist.innerHTML = '';
    todos.forEach(element => {
        let li = document.createElement('li');
        li.className = 'todo-item';

        // Task text
        const span = document.createElement('span');
        span.textContent = element.name;

        // Arrow button
        const arrowBtn = document.createElement('button');
        arrowBtn.className = 'arrow-btn';
        arrowBtn.innerHTML = '➔';
        arrowBtn.onclick = function() {
            li.classList.toggle('done');
        };

        // Delete button
        const delBtn = document.createElement('button');
        delBtn.className = 'delete-btn';
        delBtn.innerHTML = '🗑️';
        delBtn.onclick = function() {
            axios.post('/deletetodo', { id: element.id })
                .then(res => addToDom(res.data))
                .catch(err => console.log(err));
        };

        li.appendChild(span);
        li.appendChild(arrowBtn);
        li.appendChild(delBtn);
        tasklist.appendChild(li);
    });
}

//whenever our page loads we want to get the todos from the server
//and add them to the dom
//we can use axios to make a get request to the server
axios.get('/gettodos')
.then((res)=>{
    let todos=res.data;
    console.log(todos);
    addToDom(todos);
})
.catch((err)=>{
    console.log(err);
}   );

addtask.addEventListener('click', (e) => {

    e.preventDefault();

    axios.post('/addtodo', {
        name: newtask.value
    })
    .then((res)=>{
        let todos=res.data;
        console.log(todos);
        addToDom(todos);
    })
    .catch((err)=>{
        console.log(err);
    })
});

axios.get('/gettodos')
.then((todos)=>{
    console.log(todos);
})
.catch((err)=>{
    console.log(err);
})