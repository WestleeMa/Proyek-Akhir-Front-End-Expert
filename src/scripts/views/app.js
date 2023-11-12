import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button,
    drawer,
    content,
    load,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._loadingScreen = load;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    this._loadingScreen.style.display = 'flex';

    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._content.innerHTML = await page.render();
      await page.afterRender();
      const skipLinkElem = document.querySelector('.skip');
      skipLinkElem.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#main').focus();
      });
    } catch (error) {
      this._content.innerHTML = `Terdapat kesalahan: ${error.message}`;
    } finally {
      setTimeout(() => {
        this._loadingScreen.style.display = 'none';
      }, 500);
    }
  }
}

export default App;
