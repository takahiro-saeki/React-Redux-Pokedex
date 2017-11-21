import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'containers/App';

const Root = ({ store }) => (
  <AppContainer>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </Router>
    </Provider>
  </AppContainer>
);

export default Root;
