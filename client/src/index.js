import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer,{ intitalState } from './reducer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider intitalState={intitalState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);


