
function sumar(a: number, b: number): number {
    return a * b
}
console.log(sumar(23, 45))

const sumaflecha = (a: number, b: number): number => a + b
console.log(sumaflecha)

function multiplicar(n1:number, n2:number, base:number=2):number {
    return n1*base/n2
}
 console.log(multiplicar(5, 10))
 console.log(multiplicar(5,10))

 interface Mascota {
    nombre:string
    edad:number
    tipo:string
    mostrarEdad:()=>void
 }

 function crearMascota(mascotas:Mascota, x:number):void {
        mascotas.edad+=x;
        console.log(mascotas)
        mascotas.mostrarEdad
        console.log(mascotas.mostrarEdad())
 }

 const mascota1:Mascota= {
    nombre:'luna',
    edad:3,
    tipo:'perro',
    mostrarEdad() {
        return `la edad de ${this.nombre} es ${this.edad} años;` 
    }
 }

 crearMascota(mascota1, 2);