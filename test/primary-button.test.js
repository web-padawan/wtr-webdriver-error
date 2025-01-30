import { expect } from 'chai';
import '../src/primary-button.js';

describe('primary-button', () => {
  let button;

  beforeEach(() => {
    button = document.createElement('primary-button');
    button.textContent = 'Button';
    document.body.appendChild(button);
  });

  afterEach(() => {
    button.remove();
  });

  it('should have background', async () => {
    expect(getComputedStyle(button).backgroundColor).to.equal('rgb(0, 0, 255)');
  });
});
