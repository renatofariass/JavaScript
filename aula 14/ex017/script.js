function tabuada() {
    let num = document.querySelector('#txtn')
    let sel = document.querySelector('#sel')
    
    if (num.value.length == 0) {
        alert('insira um número')
    } else {
        let n = Number(num.value)
        let c = 1
        sel.innerHTML = '' //para limpar os números anteriores

        for (let tab = c; c <= 10; c++) {
            let item = document.createElement('option') //para adicionar opções a o select
            item.text = `${n} x ${c} = ${n*c}`
            sel.appendChild(item) //para adicionar elementos filhos ao select, que nesse caso é o option


        }
    }


}