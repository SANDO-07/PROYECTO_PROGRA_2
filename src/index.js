import React from 'react';
// Importa la biblioteca React, que es necesaria para crear componentes de React y utilizar JSX.

import ReactDOM from 'react-dom/client';
// Importa el módulo ReactDOM, que proporciona métodos para interactuar con el DOM y renderizar componentes de React en la página.

import './index.css';
// Importa un archivo CSS para aplicar estilos globales a la aplicación. Este archivo puede contener estilos que afectan a toda la aplicación.

import App from './App';
// Importa el componente principal de la aplicación, que normalmente contiene la estructura y la lógica de la aplicación.

import reportWebVitals from './reportWebVitals';
// Importa una función para medir el rendimiento de la aplicación. Esto es útil para analizar y optimizar el rendimiento de la aplicación.

const root = ReactDOM.createRoot(document.getElementById('root'));
// Crea un nodo raíz para la aplicación React. Utiliza el método createRoot para inicializar un contenedor React en el elemento del DOM con el id 'root'.

root.render(
  <React.StrictMode>
    {/* Envuelve la aplicación en <React.StrictMode>, que es una herramienta para identificar problemas potenciales en la aplicación. 
        Ayuda a resaltar advertencias y errores durante el desarrollo. */}
    <App />
    {/* Renderiza el componente <App>, que es el componente principal de la aplicación. */}
  </React.StrictMode>
);

reportWebVitals();
// Llama a la función reportWebVitals para medir y registrar el rendimiento de la aplicación. Esto puede ayudar a identificar áreas de mejora.