// Este es el punto de entrada de tu aplicacion

import { home } from './home.js';
import { comments } from './comments.js';

const rootDiv = document.getElementById('root');
const homeElement = document.getElementById('home');
const commentsElement = document.getElementById('comments');

const routes = {
    '/': home,
    '/comments': comments
};

const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    const buildView = routes[pathname]
    rootDiv.innerHTML = buildView()
};

homeElement.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
});
commentsElement.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/comments');
});

const currentRoute = routes[window.location.pathname];
console.log('path', window.location.pathname);
rootDiv.innerHTML = currentRoute(); //nos da la ruta en la cual estamos ubicados

