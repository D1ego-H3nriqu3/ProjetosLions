let aluno = {
    nome: "Camila Rocha",
    idade: 19,
    curso: "Trilha JavaScript",
    ativo: true,

    exibirInformacoes: function(){
        console.log(`\nNome: ${this.nome}\nIdade: ${this.idade}\nCurso: ${this.curso}`)
    },

    verificacaoAtivo: function(){
        if(this.ativo === true){
            console.log("Situação: Aluno ativo!")
        }else{
            console.log("Situação: Aluno inativo!")
        }
    },

    maioridade: function(){
        if(this.idade >= 18){
            console.log("Maior de idade: Sim!")
        }else{
            console.log("Maior de idade: Não")
        }
    }
}

aluno.exibirInformacoes()
aluno.verificacaoAtivo()
aluno.maioridade()