// Definición de la clase Tren
class Tren {
  constructor(nombre, velocidadMaxima, numeroVagones) {
      this.nombre = nombre;             // Atributo 1: Nombre del tren
      this.velocidadMaxima = velocidadMaxima; // Atributo 2: Velocidad máxima
      this.numeroVagones = numeroVagones;     // Atributo 3: Número de vagones
  }

  // Método para mostrar la información del tren
  mostrarInfo() {
      console.log(`Tren: ${this.nombre}`);
      console.log(`Velocidad Máxima: ${this.velocidadMaxima} km/h`);
      console.log(`Número de Vagones: ${this.numeroVagones}`);
  }

  // Método para calcular la capacidad total de pasajeros (suponiendo 50 pasajeros por vagón)
  calcularCapacidad() {
      const capacidad = this.numeroVagones * 50;
      console.log(`Capacidad Total de Pasajeros: ${capacidad}`);
  }
}

// Crear tres objetos de la clase Tren
const tren1 = new Tren("Expreso del Norte", 200, 10);
const tren2 = new Tren("Tren Bala", 300, 15);
const tren3 = new Tren("Locomotora Antigua", 120, 8);


tren1.mostrarInfo();
tren1.calcularCapacidad();

console.log("\n"); // Salto de línea

tren2.mostrarInfo();
tren2.calcularCapacidad();

console.log("\n"); 

tren3.mostrarInfo();
tren3.calcularCapacidad();
