import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#drawer-button'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#restaurants'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
