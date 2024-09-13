package com.calculadora.carlossandoval.servicios;
// Define el paquete en el que se encuentra esta clase. Es una buena práctica organizar las clases en paquetes relacionados.

import org.springframework.stereotype.Service;
// Importa la anotación Service, que indica que esta clase es un componente de servicio en el contexto de Spring.
import com.calculadora.carlossandoval.modelos.Operacion;
// Importa la clase Operacion, que se espera que contenga los números y el tipo de operación a realizar.
import java.util.ArrayList;
import java.util.List;
// Importa las clases ArrayList y List, que se utilizan para manejar colecciones de elementos.

@Service
// Indica que esta clase es un servicio de Spring, lo que significa que puede ser inyectada en otras clases como un bean.
public class CalculadoraService {
    // Declara una lista para almacenar el historial de operaciones realizadas.
    private List<String> historial = new ArrayList<>();

    // Método que realiza la suma de dos números.
    public float suma(Operacion operacion) {
        // Devuelve la suma de los dos números contenidos en el objeto Operacion.
        return operacion.numero1 + operacion.numero2;
    }

    // Método que realiza la resta de dos números.
    public float resta(Operacion operacion) {
        // Devuelve la resta del primer número menos el segundo número contenidos en el objeto Operacion.
        return operacion.numero1 - operacion.numero2;
    }

    // Método que realiza la multiplicación de dos números.
    public float multiplicacion(Operacion operacion) {
        // Devuelve el producto de los dos números contenidos en el objeto Operacion.
        return operacion.numero1 * operacion.numero2;
    }

    // Método que realiza la división de dos números.
    public float division(Operacion operacion) {
        // Devuelve el cociente del primer número dividido por el segundo número contenidos en el objeto Operacion.
        // Es recomendable agregar manejo de errores para evitar la división por cero.
        return operacion.numero1 / operacion.numero2;
    }
}
