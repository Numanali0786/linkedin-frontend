import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<GoogleOAuthProvider clientId="694462394853-b484l6of03vg6114t4ng1rm9186m03po.apps.googleusercontent.com">
{/* <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}> */}
<Provider store={store}>
    <App />
  </Provider>
  </GoogleOAuthProvider>;
  </React.StrictMode>,
)
