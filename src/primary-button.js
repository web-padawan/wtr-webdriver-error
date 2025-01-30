customElements.define('primary-button', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          color: #fff;
          background: #1e88e5;
          padding: 6px 12px;
        }
      </style>
      <slot></slot>
    `;
  }
})
