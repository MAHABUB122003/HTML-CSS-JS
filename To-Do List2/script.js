
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newTask = input.value.trim();
        if (newTask) {
            const listItem = document.createElement('li');
            listItem.classList.add('todo-item');
            listItem.innerHTML = `
                <span>${newTask}</span>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            `;

            todoList.appendChild(listItem);
            input.value = '';

            listItem.querySelector('.complete-btn').addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            listItem.querySelector('.delete-btn').addEventListener('click', () => {
                listItem.remove("oh");
            });
            

            listItem.querySelector('.complete-btn').addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            listItem.querySelector('.delete-btn').addEventListener('click', () => {
                listItem.remove();
            });


            

            
        }
    });
});
