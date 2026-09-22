let pedido = {
    nome: "Rafael Lima",
    valor: 200,
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
    },

    descontinhoShope: function(){
        if(this.valor >= 200){
            console.log("Elegível para desconto na próxima compra\n")
        }else{
            console.log("Não elegível para desconto\n")
        }
    }
}

pedido.exibirDados()
pedido.pagamentoVerificado()
pedido.descontinhoShope()