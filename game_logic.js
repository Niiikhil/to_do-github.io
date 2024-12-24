
const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const categorySelect = document.getElementById('categorySelect');
const todoList = document.getElementById('todoList');

// Event listener 
todoForm.addEventListener("submit",function(e) {
    e.preventDefault();

    const input_value = taskInput.value;
    console.log(input_value);

    const category = categorySelect.value;
    console.log(category);

    // we are able to fetch input and category

    const new_entry =  document.createElement('tr');

    new_entry.innerHTML = `
        <td>${input_value}</td>
        <td>${category}</td>
        <td>
            <button class="btn btn-danger btn-sm delete-btn">Delete</button>
        </td>

       
    `;



    todoList.appendChild(new_entry);


    taskInput.value = '';
    categorySelect.value = '';


    // Add delete functionality
    const deleteBtn = new_entry.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        console.log(new_entry)
        new_entry.remove(); //delete new_entry
    });


})