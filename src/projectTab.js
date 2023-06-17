import { setProjectStorage } from './index';
import { createToDoList } from './inboxTab';

function createToDoTab(title) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const form = document.createElement('form');
    const textInput = document.createElement('input');
    const submitInput = document.createElement('input');
    const container = document.querySelector('.container');
    div.classList.add('tab', 'project');
    h1.classList.add('contentHeader');
    h1.textContent = title;
    textInput.classList.add('input');
    textInput.required = true;
    submitInput.classList.add('submit');
    submitInput.type = 'submit';
    submitInput.value = 'Enter';
    form.append(textInput, submitInput);
    div.append(h1, form);
    container.appendChild(div);
    form.addEventListener('submit', submit);
}

function submit(e) {
    e.preventDefault();
    e.target.parentElement.appendChild(createToDoList(e.target[0].value));
    e.target.reset();
    setProjectStorage();
}

export { createToDoTab };
