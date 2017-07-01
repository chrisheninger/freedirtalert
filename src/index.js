import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createRenderer } from 'fela';
import { Provider, ThemeProvider } from 'react-fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import { themeConfig } from './index-styles';
import registerServiceWorker from './service-worker-registration';

import Main from './common/layout/Main';

import './reset.css';
import './base.css';

const renderer = createRenderer({
  plugins: [prefixer(), fallbackValue()],
});
// The provider will automatically renderer the styles
// into the mountNode on componentWillMount
const mountNode = document.getElementById('stylesheet');

render(
  <BrowserRouter>
    <ThemeProvider theme={themeConfig}>
      <Provider renderer={renderer} mountNode={mountNode}>
        <Main />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
