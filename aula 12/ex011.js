var idade = 19
console.log(`sua idade é ${idade}.`)

if (idade < 16) {
    console.log('você não pode votar!')
} else if (idade < 18) {
    console.log('seu voto é opcional!') 
} else if (idade >= 67) {
    console.log('seu voto é opcional')
} else {
    console.log('seu voto é obrigatório!')
}