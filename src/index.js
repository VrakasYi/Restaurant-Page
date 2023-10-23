import { initPageLoad } from './initPageLoad.js';
import { menuTab } from './menu.js';
import { contactTab } from './contact.js';

initPageLoad();

const contentDiv = document.getElementById('content');

contentDiv.addEventListener('click', (event) => {
    // Get the button's ID and perform the corresponding action
    if (event.target.tagName === 'BUTTON') {
        const buttonId = event.target.id;
        contentDiv.innerHTML = ''; // Clear the contentDiv
        
        if (buttonId === 'home') {
            initPageLoad();
        } else if (buttonId === 'menu') {
            menuTab();
        } else if (buttonId === 'contact') {
            contactTab();
        }
    }
});

// document.getElementById('home').addEventListener('click', () => {
//     contentDiv.innerHTML = '';
//     initPageLoad();
// })

// document.getElementById('menu').addEventListener('click', () => {
//     contentDiv.innerHTML = '';
//     menuTab();
// })

// document.getElementById('contact').addEventListener('click', () => {
//     contentDiv.innerHTML = '';
//     contactTab();
// })
