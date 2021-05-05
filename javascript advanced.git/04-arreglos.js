const arreglo = [1,2,3,4]
const arregloTwo = [6,7,8,9,0]


const newArreglo = [...arreglo,5,...arregloTwo]

const arregloThree = newArreglo.map(function (number) {
    return number * 10
}).join(",")


console.log(arreglo)
console.log(newArreglo)
console.log(arregloThree)

const user = { 
    'name': 'Ivan',
    'last_name' : 'Garcia',
    'address': '15th Park Avenue',
    'age': 19
}

const {name,last_name,address,age,fullName=`${name} ${last_name} ${address} ${age}`} = user

console.log(user)
console.log(fullName)

const root = document.getElementById('root')

root.innerHTML = `<h1>${ fullName}</h1> <p>${arregloThree}</p>`