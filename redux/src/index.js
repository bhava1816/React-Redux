import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
let intial={string:[],count:0}
let Todolistreducer=(final=intial,action)=>{
     if(action.type==="addvalues"){
      return {...final,string:final.string.concat(action.data)}
     }
    
     if(action.type==="replaceTodos"){
      return{...final,string:action.data}
     }
    if (action.type==="upwards"){
      return{...final,string:action.data}
     }
      if (action.type==="downwards"){
      return{...final,string:action.data}
     }
    return final
}
let counterrwducer=((final=intial,reqop)=>{
  if(reqop.type==="INCREAMEANT"){
   return {...final,count:final.count=final.count+1}
  }
  if(reqop.type==="DECREAMEANT"){
   return {...final,count:final.count=final.count-1}
  }
  if(reqop.type==="RESET"){
   return {...final,count:final.count=0}
  }
  return final
})

let store=createStore(combineReducers({Todolistreducer,counterrwducer}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App /></Provider>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
