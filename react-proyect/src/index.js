//Renderiza todos los componentes creados y se ponen en el reactDom

import React from 'react'; //importa archivos de react
import ReactDOM from 'react-dom/client'; //renderiza
import './index.css'; //llama los estilos
import App from './App'; // archivo de app importado de app.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);


