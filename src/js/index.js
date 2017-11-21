import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from 'store/configureStore';
import Root from 'Root';
import saga from 'saga.js'

document.body.style.margin = 0;

const store = configureStore();
store.runSaga(saga)

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootContainer = require('./Root').default;
    render(
      <AppContainer>
        <RootContainer store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
