import { visualDiff } from '@web/test-runner-visual-regression';
import '../src/warning-button.js';

describe('warning-button', () => {
  let div, button;

  beforeEach(() => {
    div = document.createElement('div');
    div.style.display = 'inline-block';
    div.style.padding = '10px';
    button = document.createElement('warning-button');
    button.textContent = 'Button';
    div.appendChild(button);
    document.body.appendChild(div);
  });

  afterEach(() => {
    div.remove();
  });

  it('basic', async () => {
    await visualDiff(div, 'warning-button-basic');
  });
});
