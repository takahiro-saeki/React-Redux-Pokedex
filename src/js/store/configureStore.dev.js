import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import createSagaMiddleware from 'redux-saga';
import {
  devToolsEnhancer,
  composeWithDevTools
} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return {
    ...store,
    runSaga: sagaMiddleware.run
  };
}
