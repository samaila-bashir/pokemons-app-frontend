import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";
import ReduxConfig from "./config/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = ReduxConfig();

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

axios.interceptors.request.use((config)=>{
  const token = store.getState().auth.token;
  
  if(token){
    // @ts-ignore
    config.headers["Authorization"] = `Bearer ${token}`; 
  }
    
  return config;
},(err)=> Promise.reject(err));

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
     <PersistGate persistor={persistor}>
       <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
