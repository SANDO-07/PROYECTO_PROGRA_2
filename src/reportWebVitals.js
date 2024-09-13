const reportWebVitals = onPerfEntry => {
  // Define una función llamada reportWebVitals que toma un parámetro onPerfEntry.
  
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Verifica si onPerfEntry está definido y si es una función.
    
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Importa dinámicamente el módulo 'web-vitals' y desestructura las funciones de medición de métricas.
      
      getCLS(onPerfEntry);
      // Llama a la función getCLS (Cumulative Layout Shift) pasando onPerfEntry como argumento.
      
      getFID(onPerfEntry);
      // Llama a la función getFID (First Input Delay) pasando onPerfEntry como argumento.
      
      getFCP(onPerfEntry);
      // Llama a la función getFCP (First Contentful Paint) pasando onPerfEntry como argumento.
      
      getLCP(onPerfEntry);
      // Llama a la función getLCP (Largest Contentful Paint) pasando onPerfEntry como argumento.
      
      getTTFB(onPerfEntry);
      // Llama a la función getTTFB (Time to First Byte) pasando onPerfEntry como argumento.
    });
  }
};

export default reportWebVitals
// Exporta la función reportWebVitals como el valor predeterminado, para que pueda ser importada en otros módulos.
