import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { thunk } from 'redux-thunk';
import App from './app';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducerhouse from './reduxHouse/reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(reducerhouse,composeWithDevTools(applyMiddleware(thunk)))

root.render(
  <Provider store={store}>
      <Auth0Provider
  domain="dev-doykl40g3sb13zt3.us.auth0.com"
  clientId="Jf8m0tZycxFKrj9L0CEh7cEzU96suXAm"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,

  </Provider>
  );
