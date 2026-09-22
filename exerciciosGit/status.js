let pedido = {
    nome: "Rafael Lima",
    valor: 250,
    pago: true,

    exibirDados: function(){
        console.log(`\nNome: ${this.nome}\nValor do pedido: R$ ${this.valor}`)
    }
}

pedido.exibirDados()