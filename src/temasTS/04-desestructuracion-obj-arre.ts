
interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}

interface Detalles {
    autor:string,
    anio:number
}

const reproductor:Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion:'miss',
    detalles: {
        autor:'ed',
        anio:2015
    }
}

console.log("el volumen actua es de: ", reproductor.volumen)
console.log("el segundo actual es de ", reproductor.segundo)
console.log("el autor es ", reproductor.detalles.autor)
console.log("el año es ", reproductor.detalles.anio)

const {volumen,segundo,cancion,detalles}=reproductor
const {autor,anio}=detalles

console.log("el volumen es ", volumen)
console.log("el segundo actua es ", segundo)
console.log("cancion es ", cancion)
console.log("autor es", autor)
console.log("año es: ", anio)

const dbz:string[]=['goku', 'vegeta', 'trunks']
const [p1, p2, p3]=dbz

console.log("personaje 1", p1)
console.log("personaje 2", p2)
console.log("personaje 3", p3)

