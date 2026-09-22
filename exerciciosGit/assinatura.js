let assinatura = {
    nome: "Beatriz Nunes",
    plano: "Premium",
    mesesAtivo: 14,

    exibirDados: function(){
        console.log(`\nNome: ${this.nome}\nPlano: ${this.plano}\nMeses ativo: ${this.mesesAtivo}`)
    }
}

assinatura.exibirDados()