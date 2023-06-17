import { tabSwitching, setInboxStorage, setProjectStorage, setDoneStorage } from './index';
import { updateDoneTab } from './doneTab';

function createToDoList(toDoValue) {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    div.classList.add('list');
    input.classList.add('input2');
    span1.classList.add('edit');
    span2.classList.add('tick');
    span3.classList.add('cross');
    input.type = 'text';
    input.value = toDoValue;
    input.readOnly = true;
    span1.textContent = '📝';
    span2.textContent = '✔️';
    span3.textContent = '🗑️';
    div.append(input, span1, span2, span3);
    editTodo(input, span1);
    doneTodo(div, span2, input);
    deleteTodo(div, span3);
    return div;
}

function appendCreatedList(createdList) {
    const container = document.querySelector('.inbox');
    container.appendChild(createdList);
}

function editTodo(input, edit) {
    input.addEventListener('blur', () => {
        input.readOnly = true;
        setInboxStorage();
        setProjectStorage();
    });
    edit.addEventListener('click', () => {
        input.readOnly = false;
        input.focus();
    });
}

function doneTodo(div, tick, input) {
    tick.addEventListener('click', () => {
        div.remove();
        updateDoneTab(input);
        setInboxStorage();
        setProjectStorage();
        setDoneStorage();
    });
}

function deleteTodo(div, cross) {
    cross.addEventListener('click', () => {
        div.remove();
        setInboxStorage();
        setProjectStorage();
    });
}

function submit(e) {
    e.preventDefault();
    appendCreatedList(createToDoList(e.target[0].value));
    form.reset();
    setInboxStorage();
    setProjectStorage();
}

const form = document.querySelector('.inboxForm');
form.addEventListener('submit', submit);

const inboxBtn = document.querySelector('.inboxBtn');
inboxBtn.addEventListener('click', (e) => {
    tabSwitching(e, 'inbox');
});

export { createToDoList, appendCreatedList };
