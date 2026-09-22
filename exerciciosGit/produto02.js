let produto = {
    nome: "Teclado Mecânico",
    preco: 249.99,
    estoque: 8
}

function exibirDados(x){
    console.log(`\nNome: ${x.nome}\nPreço: R$ ${x.preco}\nEstoque: ${x.estoque} unidades`)
}

exibirDados(produto)