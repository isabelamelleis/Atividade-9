function transformarImparPar() {
    let numeroUsuario = parseInt(prompt("Digite um número inteiro:"));
    if (numeroUsuario % 2 == 0) {
        numeroUsuario++;
        console.log("Seu número virou ímpar: " + numeroUsuario);
    } else {
        numeroUsuario--;
        console.log("Seu número virou par: " + numeroUsuario);
    }
}

transformarImparPar ();