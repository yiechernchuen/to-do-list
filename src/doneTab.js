import { tabSwitching } from './index';

function updateDoneTab(input) {
    const doneTab = document.querySelector('.done');
    const paragraph = document.createElement('p');
    paragraph.classList.add('doneList');
    if (!input.value) {
        paragraph.textContent = input;
    } else {
        paragraph.textContent = input.value;
    }
    doneTab.appendChild(paragraph);
}
const doneBtn = document.querySelector('.deletedBtn');
doneBtn.addEventListener('click', (e) => {
    tabSwitching(e, 'done');
});
export { updateDoneTab };
