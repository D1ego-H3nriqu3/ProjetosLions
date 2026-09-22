let aluno = {
    nome: "Camila Rocha",
    idade: 19,
    curso: "Trilha JavaScript",
    ativo: true,

    exibirInformacoes: function(){
        console.log(`\nNome: ${this.nome}\nIdade: ${this.idade}\nCurso: ${this.curso}`)
    }
}

aluno.exibirInformacoes()