function contar() {
    let inicio = document.querySelector('#nmr1')
    let final = document.querySelector('#nmr2')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        alert ('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'contando: ' 
        //transformando para números e pegando os valores deles
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo igual a 0, vamos considerar passo 1')
            p = 1
        }
        if (i<f) {
            //contagem crescente
            for (let cont = i; cont <= f; cont+=p ) {
                res.innerHTML += `${cont} `
           }
        } else {
            //contagem decrescente

        for (let cont = i; cont >= f; cont -= p) {
            res.innerHTML += `${cont} `
          } 
        }
    }
}


