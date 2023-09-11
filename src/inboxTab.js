import { tabSwitching, setInboxStorage, setProjectStorage, setDoneStorage } from './index';
import { updateDoneTab } from './doneTab';

function createToDoList(toDoValue) {
    const div = document.createElement('div');
    const iconContainer = document.createElement('div');
    const input = document.createElement('input');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const editIcon = document.createElement('i');
    const tickIcon = document.createElement('i');
    const crossIcon = document.createElement('i');
    div.classList.add('list');
    iconContainer.classList.add('iconContainer');
    input.classList.add('input2');
    span1.classList.add('edit');
    span2.classList.add('tick');
    span3.classList.add('cross');
    editIcon.classList.add('fa-solid', 'fa-pen-to-square', 'fa-lg');
    tickIcon.classList.add('fa-solid', 'fa-check', 'fa-lg');
    crossIcon.classList.add('fa-solid', 'fa-xmark', 'fa-lg');
    input.type = 'text';
    input.value = toDoValue;
    input.readOnly = true;
    span1.appendChild(editIcon);
    span2.appendChild(tickIcon);
    span3.appendChild(crossIcon);
    iconContainer.append(span1, span2, span3);
    div.append(input, iconContainer);
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
        updateDoneTab(input.value);
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

const form = document.querySelector('.inbox .toDoForm');
form.addEventListener('submit', submit);

const inboxBtn = document.querySelector('.inboxBtn');
inboxBtn.addEventListener('click', (e) => {
    tabSwitching(e, 'inbox');
});

export { createToDoList, appendCreatedList };
