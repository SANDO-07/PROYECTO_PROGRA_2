package com.calculadora.carlossandoval.controlador;
import com.calculadora.carlossandoval.modelos.Operacion;
import com.calculadora.carlossandoval.servicios.CalculadoraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// Indica que esta clase es un controlador REST, lo que significa que maneja solicitudes HTTP
@RequestMapping("/api/calculadora")
// Define la ruta base para todas las solicitudes que se manejan en este controlador
public class CalculadoraController {

    @Autowired
    // Indica que Spring debe inyectar automáticamente una instancia de CalculadoraService en esta variable
    CalculadoraService calculadoraService;

    @PostMapping("/operacion")
    // Mapea las solicitudes HTTP POST a la ruta "/api/calculadora/operacion"
    public float realizarOperacion(@RequestBody Operacion operacion) {
        // Método que recibe un objeto Operacion en el cuerpo de la solicitud y devuelve un resultado como float

        if (operacion.tipo.equals("suma")) {
            // Si el tipo de operación es "suma", llama al método suma del servicio de calculadora
            return calculadoraService.suma(operacion);
        }
        if (operacion.tipo.equals("resta")) {
            // Si el tipo de operación es "resta", llama al método resta del servicio de calculadora
            return calculadoraService.resta(operacion);
        }
        if (operacion.tipo.equals("multiplicacion")) {
            // Si el tipo de operación es "multiplicacion", llama al método multiplicacion del servicio de calculadora
            return calculadoraService.multiplicacion(operacion);
        }
        if (operacion.tipo.equals("division")) {
            // Si el tipo de operación es "division", llama al método division del servicio de calculadora
            return calculadoraService.division(operacion);
        }

        // Si el tipo de operación no coincide con ninguno de los anteriores, devuelve 0 como valor predeterminado
        return 0;
    }
}