import { tabSwitching, setProjectSidebarStorage, setProjectStorage } from './index';
import { createToDoTab } from './projectTab';

function addProject(inputValue) {
    const div = document.createElement('div');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const tick = document.createElement('button');
    const cross = document.createElement('button');
    div.classList.add('projectUserInputContainer');
    input.classList.add('projectInput', 'tabBtns');
    tick.classList.add('projectTick');
    cross.classList.add('projectCross');
    input.type = 'text';
    input.required = true;
    if (inputValue) input.value = inputValue;
    tick.type = 'submit';
    tick.textContent = '✔️';
    cross.textContent = '❌';
    form.append(input, tick, cross);
    div.append(form);
    cross.addEventListener('click', projectDelete);
    form.addEventListener('submit', projectTick);
    return div;
}

function projectTick(e) {
    const input = e.target[0];
    const tick = e.target[1];
    e.preventDefault();
    input.readOnly = true;
    input.required = false;
    tick.remove();
    createToDoTab(input.value);
    addClassToProjectBtnAndTab();
    projectBtn.style.display = 'inline-block';
    input.addEventListener('click', (e) => {
        addClassToProjectBtnAndTab();
        tabSwitching(e, e.target.classList[2]);
    });
    setProjectSidebarStorage();
}

function projectDelete(e) {
    const div = e.target.parentElement.parentElement;
    const projectSidebarInput = e.target.form[0];
    div.remove();
    if (document.querySelector('.projectTick')) {
        projectBtn.style.display = 'none';
    } else {
        projectBtn.style.display = 'inline-block';
    }
    const projectToBeDelete = document.querySelector(`.tab.${projectSidebarInput.classList[2]}`);
    if (projectToBeDelete) {
        projectToBeDelete.remove();
        if (!document.querySelector('.active')) document.querySelector('.inboxBtn').click();
    }

    addClassToProjectBtnAndTab();
    setProjectSidebarStorage();
    setProjectStorage();
}

function addClassToProjectBtnAndTab() {
    const projectInput = document.querySelectorAll('.projectInput');
    const projectTabs = document.querySelectorAll('.project');
    for (let i = 0; i < projectTabs.length && i < projectInput.length; i++) {
        projectInput[i].className = `projectInput tabBtns project${i}`;
        projectTabs[i].className = `tab project project${i}`;
    }
}

const projectBtn = document.querySelector('.projectBtn');
projectBtn.addEventListener('click', (e) => {
    projectBtn.style.display = 'none';
    e.target.parentElement.appendChild(addProject());
    document.querySelector('.projectInput[required]').focus();
});

export { addProject };
