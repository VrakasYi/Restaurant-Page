export function menuTab() {
    const containerDiv = document.getElementById('content')
    //create the divs and tabs
    const headline = document.createElement('div');
    const copy = document.createElement('div');
    const tabDiv = document.createElement('div');//a container to hold the tabs
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    //add ID and text to the divs
    headline.id = 'headline';
    headline.textContent = 'Epicurea';
    copy.id = 'copy';
    copy.textContent = 'Discover the Magic';
    home.classList = 'buttonNav';
    home.textContent = 'Home'
    menu.classList = 'buttonNav';
    menu.classList.add('active');
    menu.textContent = 'Menu';
    contact.textContent = 'Contact'
    contact.classList = 'buttonNav';
    tabDiv.id = 'tabDiv'
    home.id = 'home';
    menu.id = 'menu';
    contact.id = 'contact';

    //append the divs to the content div
    containerDiv.appendChild(headline);
    headline.appendChild(tabDiv);
    tabDiv.appendChild(home);
    tabDiv.appendChild(menu);
    tabDiv.appendChild(contact);
    containerDiv.appendChild(copy);
}