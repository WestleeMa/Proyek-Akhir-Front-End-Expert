import 'regenerator-runtime';
import '../styles/main.css';
import './utils/custom-element';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// console.log('Hello Coders! :)');
const app = new App({
  button: document.getElementById('hamburger'),
  drawer: document.getElementById('navBar'),
  content: document.querySelector('main'),
  load: document.getElementById('loading-screen'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
