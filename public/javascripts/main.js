//Reads sites from sites.js
import siteArray from './sites.js';


//Read site list, creates buttons, puts them in correct category
siteArray.forEach(site => {
    const btnContainer = document.getElementById(site.category);

    const newBtn = document.createElement('button');
    newBtn.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block', 'siteBtn');
    newBtn.setAttribute('type', 'button');
    newBtn.setAttribute('data-site', site.siteURL);
    newBtn.textContent = site.siteName;

    btnContainer.appendChild(newBtn);
});

const siteBtn = document.getElementsByClassName('siteBtn');

for (const btn of siteBtn) {
    btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-site');
        window.open(url, '_blank');
    });
}