import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/css/style.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/barfiller.css"
import "./assets/css/font-awesome.min.css"
import "./assets/css/slicknav.min.css"
import "./utils/styles.css"
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
