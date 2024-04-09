function soma() {
    let soma = 0;
    let numeroUsuario;
    do {
        numeroUsuario = parseInt(prompt("Digite um número inteiro para somar ou '0' se deseja encerrar: "));
        soma += numeroUsuario;
    } while (numeroUsuario !== 0);
    alert("A soma ficou: " + soma);
}

soma();