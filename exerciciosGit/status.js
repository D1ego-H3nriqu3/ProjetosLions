let pedido = {
    nome: "Rafael Lima",
    valor: 250,
    pago: true,

    exibirDados: function(){
        console.log(`\nNome: ${this.nome}\nValor do pedido: R$ ${this.valor}`)
    },

    pagamentoVerificado: function(){
        if(this.pago === true){
            console.log("Status: pagamento confirmado")
        }else{
            console.log("Status: aguardando pagamento")
        }
    }
}

pedido.exibirDados()
pedido.pagamentoVerificado()