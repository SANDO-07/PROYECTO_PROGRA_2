package com.calculadora.carlossandoval;
// Define el paquete en el que se encuentra esta clase. Es una buena práctica organizar las clases en paquetes.

import org.springframework.boot.SpringApplication;
// Importa la clase SpringApplication, que se utiliza para lanzar la aplicación Spring Boot.
import org.springframework.boot.autoconfigure.SpringBootApplication;
// Importa la anotación SpringBootApplication, que habilita la configuración automática de Spring Boot.

@SpringBootApplication
// Esta anotación combina tres anotaciones:
// 1. @Configuration: Indica que la clase puede contener definiciones de beans.
// 2. @EnableAutoConfiguration: Permite que Spring Boot configure automáticamente la aplicación basada en las dependencias presentes.
// 3. @ComponentScan: Permite que Spring busque componentes, configuraciones y servicios en el paquete actual y sus subpaquetes.
public class CarlossandovalApplication {

	public static void main(String[] args) {
		// Método principal que se ejecuta al iniciar la aplicación.
		SpringApplication.run(CarlossandovalApplication.class, args);
		// Llama al método run de la clase SpringApplication, que inicia la aplicación Spring Boot.
		// El primer argumento es la clase principal y el segundo son los argumentos de línea de comandos.
	}

}


