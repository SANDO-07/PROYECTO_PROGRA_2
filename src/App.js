import React, { useState } from 'react';
// Importa React y el hook useState desde la biblioteca de React. useState se utiliza para manejar el estado en componentes funcionales.
import './App.css';
// Importa el archivo de estilos CSS para aplicar estilos a este componente.

function App() {
  // Declara el estado del componente utilizando useState.
  const [input, setInput] = useState(''); 
  // Estado para almacenar la entrada actual del usuario en la calculadora.
  
  const [history, setHistory] = useState([]); 
  // Estado para almacenar el historial de operaciones realizadas.

  const [errorMessage, setErrorMessage] = useState(''); 
  // Estado para almacenar mensajes de error que puedan ocurrir durante los cálculos.

  const handleButtonClick = (value) => {
    // Función que se llama cuando se hace clic en un botón de número u operador.
    setInput(input + value); // Actualiza el estado de entrada concatenando el valor del botón.
    setErrorMessage(''); // Limpia el mensaje de error al ingresar un nuevo valor.
  };

  const handleCalculate = () => {
    // Función que se llama al hacer clic en el botón de igual para calcular el resultado.
    try {
      // Intenta ejecutar el bloque de código a continuación.
      if (input.includes('/0')) {
        // Verifica si la entrada contiene una división por cero.
        setErrorMessage("No se puede realizar su operación: división por cero");
        return; // Sale de la función si se detecta una división por cero.
      }
      
      const resultado = eval(input); 
      // Evalúa la expresión matemática en la entrada. (Nota: eval puede ser peligroso si no se controla adecuadamente la entrada del usuario).
      setInput(resultado.toString()); 
      // Actualiza la entrada con el resultado convertido a cadena.

      const newHistory = [...history, `${input} = ${resultado}`];
      // Crea un nuevo historial que incluye la operación actual y su resultado.
      
      if (newHistory.length > 10) {
        newHistory.shift(); 
        // Si el historial supera las 10 entradas, elimina la más antigua.
      }
      setHistory(newHistory); // Actualiza el estado del historial.
    } catch (error) {
      // Captura cualquier error que ocurra durante la evaluación.
      console.error("Error en la expresión:", error);
      setInput("Error"); // Muestra "Error" en la entrada si ocurre un error.
    }
  };

  const handleClear = () => {
    // Función que se llama al hacer clic en el botón de limpiar.
    setInput(''); // Limpia la entrada.
    setErrorMessage(''); // Limpia el mensaje de error.
  };

  const showHistory = () => {
    // Función que muestra el historial de operaciones en un cuadro de alerta.
    alert(history.join('\n')); // Une las operaciones en el historial y las muestra en un cuadro de alerta.
  };

  return (
    <div className="App">
      {/* Contenedor principal de la aplicación */}
      <div className="calculator">
        {/* Contenedor de la calculadora */}
        <input type="text" className="calculator-screen" value={input} readOnly />
        {/* Campo de entrada que muestra el valor actual. Es de solo lectura para evitar ediciones manuales. */}
        <div className="calculator-keys">
          {/* Contenedor de las teclas de la calculadora */}
          <button onClick={handleClear} className="key-clear span-2">C</button>
          {/* Botón para limpiar la entrada */}
          <button onClick={() => handleButtonClick('/')} className="key-operator">/</button>
          {/* Botón para la división */}
          <button onClick={() => handleButtonClick('*')} className="key-operator">*</button>
          {/* Botón para la multiplicación */}

          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('-')} className="key-operator">-</button>
          {/* Botón para la resta */}

          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('+')} className="key-operator">+</button>
          {/* Botón para la suma */}

          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>

          <button onClick={() => handleButtonClick('0')} className="span-2">0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          {/* Botón para el punto decimal */}
          <button onClick={handleCalculate} className="key-equal">=</button>
          {/* Botón para calcular el resultado */}
          <button onClick={showHistory} className="key-history span-2">Historial</button>
          {/* Botón para mostrar el historial de operaciones */}
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {/* Muestra el mensaje de error si existe */}
      </div>
    </div>
  );
}

export default App;
// Exporta el componente App para que pueda ser utilizado en otras partes de la aplicación.