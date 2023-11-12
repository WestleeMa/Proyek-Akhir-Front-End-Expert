class FooterRestoKu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
            <p>RestoKu &copy; 2023 | Westlee Matthew Agustinus</p>
        </footer>
        `;
  }
}

customElements.define('restoku-footer', FooterRestoKu);
