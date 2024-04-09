function verificarLetra () {
    let letraUsuario = prompt("Digite uma letra: ");
    letraUsuario.toLowerCase();
    if ((letraUsuario === "a") || (letraUsuario === "e") || (letraUsuario === "i") || (letraUsuario === "o") || (letraUsuario === "u")) {
        console.log("A letra que você digitou é uma vogal.")
    } else {
        console.log("A letra que você digitou é uma consoante.")
    }
}

verificarLetra ();