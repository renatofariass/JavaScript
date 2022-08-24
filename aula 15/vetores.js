let num = [1, 5, 7, 4, 8]

/* for (let pos = 0; pos < num.length; pos++) {
    console.log(`o número de ${pos} é igual a ${num[pos]}`)
}
*/

for (let pos in num)  {
    console.log(`o número de ${pos} é igual a ${num[pos]}`)

}

let pos = num.indexOf(8)
console.log(`o valor 8 está na posição ${pos}` )