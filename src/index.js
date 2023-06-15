import './styles.css';
import './inboxTab';
import './projectSidebar';
import './projectTab';
import './doneTab';

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

export { tabSwitching };
