import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import reportWebVitals from './reportWebVitals';
import rootReducer from './Redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import App from './App';

const configureStore = () => {
  const enhancer = composeWithDevTools(applyMiddleware(thunk));
    return createStore(rootReducer,enhancer)
};

const store = configureStore();

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//reportWebVitals();