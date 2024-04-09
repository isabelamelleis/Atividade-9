function numerosDecresecentes() {
    let numerosEmOrdem = [];
    for (let i = 0; i < 4; i++) {
        let numeros = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));
        numerosEmOrdem.push(numeros);
    }
    numerosEmOrdem.sort(function(a, b){return b-a}); //É uma função específica que já faz os números do array ficarem em ordem decrescente
    alert("Os números digitados, agora em ordem decrescente, ficam: " + numerosEmOrdem);
}

numerosDecresecentes ();