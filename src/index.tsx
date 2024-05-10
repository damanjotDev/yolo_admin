// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom'
import "./global.css"
import App from './App';
import {store, persistor} from './stateStore';
import { ScrollToTop } from './components/scrollToTop/scrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <BrowserRouter>
      <ScrollToTop/>
      <App/>
    </BrowserRouter>
    </PersistGate>
  </Provider>
);