import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createRenderer } from 'fela';
import { Provider as StyleProvider, ThemeProvider } from 'react-fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import { themeConfig } from './index-styles';
import registerServiceWorker from './registerServiceWorker';

import Main from './common/layout/Main';

import './reset.css';
import './base.css';

const renderer = createRenderer({
  plugins: [prefixer(), fallbackValue()],
});

render(
  <BrowserRouter>
    <StyleProvider renderer={renderer}>
      <ThemeProvider theme={themeConfig}>
        <Main />
      </ThemeProvider>
    </StyleProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
