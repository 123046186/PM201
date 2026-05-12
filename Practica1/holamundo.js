// // Codigo JS del lado del servidor

console.log("Hola Mundo JS con node")

//calculo
let edad1= 12
let edad2= 34

console.log("Edad promedio: ")
console.log((edad1 + edad2)/2)

//medir el tiempo del proceso
console.time("mi proceso")

for(let i = 2; i<1000; i++){

}
console.timeEnd("mi proceso")


//objetos tipo tabla
let usuarios=[
        {nombre:"erick", edad: 21},
        {nombre:"rick", edad: 21},
];

console.table(usuarios)