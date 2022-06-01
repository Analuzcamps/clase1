//Traigo la libreria de Ract

import React from 'react';

//Traigo la libreria de ReactDOM

import ReactDOM from 'react-dom/client';

//Agarro una librería que ya exista en React

/*function App(){
  return "Hola Mundo"
}*/

/*const App = () => "Hola Mundo usando JSX y Arrow Function"*/

import App from "./App"
import "./estilo.css" 

//Mostrar al app en el DOM (crea root donde la app se va a mostrar)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>) ;
























/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
*/
