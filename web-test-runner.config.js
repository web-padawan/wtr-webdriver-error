import { visualRegressionPlugin } from '@web/test-runner-visual-regression/plugin';
import { webdriverLauncher } from '@web/test-runner-webdriver';

export default {
  concurrency: 1,
  nodeResolve: true,
  filterBrowserLogs: (log) => {
    // Filter out webdriver debug output
    if (log.type === 'debug' && log.args[0].startsWith('[WDIO]')) {
      return false;
    }

    return true;
  },
  browsers: [
    webdriverLauncher({
      automationProtocol: 'webdriver',
      hostname: 'localhost',
      port: 4444,
      path: '/wd/hub/',
      capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--no-sandbox', '--headless'],
        },
      },
    }),
  ],
  plugins: [
    visualRegressionPlugin({
      baseDir: 'screenshots',
      update: process.env.TEST_ENV === 'update',
    }),
  ]
};
