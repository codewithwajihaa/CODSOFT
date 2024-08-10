

let listContainer = document.getElementById('List Container');
let inputBox = document.getElementById('input-box');

function addTask() {
    if (inputBox.value === '') {
        alert('Add your Task');
    } else {
        let task = document.createElement('li');
        task.textContent = inputBox.value;
        listContainer.appendChild(task);

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', (el) => {
    if (el.target.tagName === 'LI') {
        el.target.classList.toggle('checked');
    } else if (el.target.tagName === 'SPAN') {
        el.target.parentElement.remove();
        saveData();  
    }
});

function saveData() {
    localStorage.setItem('Tasks', listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('Tasks') || '';
}
showData();
