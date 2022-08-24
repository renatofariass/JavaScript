let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

//verifica se o número está entre 1 e 100.
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

//verifica se o número já está contido na lista, impedindo repetições.
function inLista(numero, v_lista) {
    if(v_lista.indexOf(Number(numero)) != -1 ) {
        return true 
    }
    else {
        return false
    }
}
len

function adicionar() {
    if(isNumero(num.value) && !inLista (num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = '' //para quando eu adicionar algum elemento a lista ele limpar o analisador
    }
    else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //limpa os valores do campo adicionar após ser adicionado
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    }
    else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma = soma + valores[pos]
            media = soma / tot
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < valores) {
                menor = valores[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> A soma entre os valores são ${soma}. </p>`
        res.innerHTML += `<p> A média entre os valores são ${media}. </p>`
    }
}