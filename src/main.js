// Este es el punto de entrada de tu aplicacion

import home from './vistas/home.js';
import login from './vistas/login.js';
import error from './vistas/error.js';

console.log('se carga');
const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error', component: error },

];
const defaultRoute = '/';
const container = document.getElementById('container');

function navigateTo(hash) {
  console.log(hash);
  const route = routes.find((routeFound) => routeFound.path === hash);
  console.log(route);
  if (route) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,

    );
    if (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
console.log(window.location.pathname);
navigateTo(window.location.pathname || defaultRoute);