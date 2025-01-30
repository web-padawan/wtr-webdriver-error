import { expect } from 'chai';
import '../src/warning-button.js';

describe('warning-button', () => {
  let button;

  beforeEach(() => {
    button = document.createElement('warning-button');
    button.textContent = 'Button';
    document.body.appendChild(button);
  });

  afterEach(() => {
    button.remove();
  });

  it('should have background', async () => {
    expect(getComputedStyle(button).backgroundColor).to.equal('rgb(255, 0, 0)');
  });
});
