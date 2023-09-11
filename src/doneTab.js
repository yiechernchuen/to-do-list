import { tabSwitching } from './index';

function updateDoneTab(input) {
    const doneTab = document.querySelector('.done ul');
    const doneList = document.createElement('li');
    doneList.classList.add('doneList');
    if (!input) {
        return;
    } else {
        doneList.textContent = input;
    }
    doneTab.appendChild(doneList);
}
const doneBtn = document.querySelector('.deletedBtn');
doneBtn.addEventListener('click', (e) => {
    tabSwitching(e, 'done');
});
export { updateDoneTab };
