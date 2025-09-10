interface Alumno {
    nombre:string,
    edad:number,
    correo?:string,
    nota:number | string
     activo:boolean,
}

const alumno: Alumno = {
    correo:"huan@gmail.com",
    nombre:"juan",
    edad:23,
    activo:true,
    nota:9.8
}

console.table(alumno)

let mascotas:string[]=['perro', 'gato', 'loro', 'topo']
mascotas.push('tortuga')
console.log(mascotas)
mascotas[1]='pez'
console.log(mascotas)

let idades:(number|string)[]=[1, 2, 3, 4, 5]
idades.push(90)
idades.push('100')
console.log(idades)