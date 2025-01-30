import { visualDiff } from '@web/test-runner-visual-regression';
import '../src/primary-button.js';

describe('primary-button', () => {
  let div, button;

  beforeEach(() => {
    div = document.createElement('div');
    div.style.display = 'inline-block';
    div.style.padding = '10px';
    button = document.createElement('primary-button');
    button.textContent = 'Button';
    div.appendChild(button);
    document.body.appendChild(div);
  });

  afterEach(() => {
    div.remove();
  });

  it('basic', async () => {
    await visualDiff(div, 'primary-button-basic');
  });
});
