class Persona3 {
    protected nombre: string;
    protected edad: number;
    protected direccion: string;

    constructor(nombre: string, edad: number, direccion: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    mostrarPersona() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Dirección: ${this.direccion}`);
    }
}

const persona = new Persona3("Fabricio", 22, "CDMX");
persona.mostrarPersona();

class Empleado {
    protected nombre: string;
    protected salario: number;
    protected puesto: string;

    constructor(nombre: string, salario: number, puesto: string) {
        this.nombre = nombre;
        this.salario = salario;
        this.puesto = puesto;
    }

    mostrarEmpleado() {
        console.log(`Nombre: ${this.nombre}, Salario: $${this.salario}, Puesto: ${this.puesto}`);
    }
}

const empleado1 = new Empleado("Carlos", 15000, "Desarrollador");
empleado1.mostrarEmpleado();
