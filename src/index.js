import './styles.css';
import { createToDoList, appendCreatedList } from './inboxTab';
import { addProject } from './projectSidebar';
import './projectTab';
import { updateDoneTab } from './doneTab';

function tabSwitching(e, tabName) {
    const tabContent = document.querySelectorAll('.tab');
    tabContent.forEach((tab) => {
        tab.style.display = 'none';
    });
    const tabLinks = document.querySelectorAll('.tabBtns');
    tabLinks.forEach((link) => {
        link.classList.remove('active');
    });
    const tabActive = document.querySelector(`.tab.${tabName}`);
    tabActive.style.display = 'flex';
    e.target.classList.add('active');
}

function setInboxStorage() {
    const inboxToDoValue = document.querySelectorAll('.inbox .list .input2');
    let inboxStorage = [];
    if (inboxToDoValue) {
        inboxToDoValue.forEach((list) => {
            inboxStorage.push(list.value);
        });
    }
    if (inboxStorage.length > 0) {
        localStorage.setItem('inbox', JSON.stringify(inboxStorage));
    } else {
        localStorage.removeItem('inbox');
    }
}

function getInboxStorage() {
    const inboxStorage = JSON.parse(localStorage.getItem('inbox'));
    if (inboxStorage) {
        inboxStorage.forEach((value) => {
            appendCreatedList(createToDoList(value));
        });
    }
}
function setProjectSidebarStorage() {
    const sidebarProjectTitle = document.querySelectorAll('.projectInput.tabBtns');
    const projectTitleStorage = [];
    if (sidebarProjectTitle) {
        sidebarProjectTitle.forEach((title) => {
            projectTitleStorage.push(title.value);
        });
    }
    if (projectTitleStorage.length > 0) {
        localStorage.setItem('sidebarProject', JSON.stringify(projectTitleStorage));
    } else {
        localStorage.removeItem('sidebarProject');
    }
}

function getProjectSidebarStorage() {
    const projectTitleStorage = JSON.parse(localStorage.getItem('sidebarProject'));
    const sidebarProject = document.querySelector('.sidebarProject');
    if (projectTitleStorage) {
        projectTitleStorage.forEach((value) => {
            sidebarProject.appendChild(addProject(value));
            document.querySelector('.projectTick').click();
        });
    }
}

function setProjectStorage() {
    const projectTab = document.querySelectorAll('.tab.project');
    const projectListStorage = {};
    projectTab.forEach((tab, index) => {
        const input = tab.querySelectorAll('.list .input2');
        if (input.length > 0) {
            projectListStorage[`project${index}`] = [];
            input.forEach((list) => {
                projectListStorage[`project${index}`].push(list.value);
            });
        }
    });
    if (Object.keys(projectListStorage).length > 0) {
        localStorage.setItem('project', JSON.stringify(projectListStorage));
    } else {
        localStorage.removeItem('project');
    }
}

function getProjectStorage() {
    const projectStorage = JSON.parse(localStorage.getItem('project'));
    if (projectStorage) {
        for (const key in projectStorage) {
            const projectTab = document.querySelector(`.tab.project.${key}`);
            projectStorage[key].forEach((value) => {
                projectTab.appendChild(createToDoList(value));
            });
        }
    }
}

function setDoneStorage() {
    const doneList = document.querySelectorAll('.tab .doneList');
    const doneStorage = [];
    doneList.forEach((list) => {
        doneStorage.push(list.textContent);
    });
    localStorage.setItem('done', JSON.stringify(doneStorage));
}

function getDoneStorage() {
    const doneStorage = JSON.parse(localStorage.getItem('done'));
    if (doneStorage) doneStorage.forEach(updateDoneTab);
}

if (localStorage.length > 0) {
    getInboxStorage();
    getProjectSidebarStorage();
    getProjectStorage();
    getDoneStorage();
}

export { tabSwitching, setInboxStorage, setProjectSidebarStorage, setProjectStorage, setDoneStorage };
