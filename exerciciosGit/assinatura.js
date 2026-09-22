let assinatura = {
    nome: "Beatriz Nunes",
    plano: "Premium",
    mesesAtivo: 14,

    exibirDados: function(){
        console.log(`\nNome: ${this.nome}\nPlano: ${this.plano}\nMeses ativo: ${this.mesesAtivo}`)
    },

    tipoCliente: function(){
        if(this.mesesAtivo < 6){
            console.log("Classificação: cliente novo")
        }else if(this.mesesAtivo >= 6 && this.mesesAtivo <= 23){
            console.log("Classificação: cliente fiel")
        }else{
            console.log("Classificação: cliente veterano")
        }
    }
}

assinatura.exibirDados()
assinatura.tipoCliente()