const senhaCorreta = "lions1234"
const senhaDigitada = "lions2026"

if(senhaDigitada === senhaCorreta){
    console.log("\nAcesso liberado;\n")
}else if (senhaDigitada !== senhaCorreta){
    console.log("\nAcesso negado!\n")
}else{
    console.log(`\nEstranho...\n`)
}