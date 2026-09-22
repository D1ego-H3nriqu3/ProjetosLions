let produto = {
    nome: "Teclado Mecânico",
    preco: 249.9,
    estoque: 8
}

function exibirDados(x){
    let valorTotal = calcVAlorT(x.estoque,x.preco)
    console.log(`\nNome: ${x.nome}\nPreço: R$ ${x.preco}\nEstoque: ${x.estoque} unidades\nValor total em estoque: ${valorTotal}`)
    avisoEstoque(x.estoque)
}

function calcVAlorT(estoque, preco){
        let valorTotal = estoque * preco
        return valorTotal
}

function avisoEstoque(estoque){
    if(estoque <= 5){
        console.log("Situação do estoque: baixo\n")
    }else{
        console.log("Situação do estoque: normal\n")
    }
}

exibirDados(produto)

