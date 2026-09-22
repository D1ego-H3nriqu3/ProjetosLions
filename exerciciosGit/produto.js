const produto = {
nome: "Fone de Ouvido",
preco: 89.9,
estoque: 15,

    calcularValor: function(){
        let valorTotal = this.preco * this.estoque
        return valorTotal
    }
};
console.log("Produto: " + produto.nome);
console.log("Preço: R$ " + produto.preco);
console.log("Estoque: " + produto.estoque + " unidades");

let valorTotal = produto.calcularValor()

console.log("Preço total em estoque: R$ " + valorTotal);

