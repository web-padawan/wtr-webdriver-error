customElements.define('warning-button', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          color: #fff;
          background: red;
          padding: 6px 12px;
        }
      </style>
      <slot></slot>
    `;
  }
})
