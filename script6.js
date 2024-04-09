function verificarLetra () {
    let letraUsuario = prompt("Digite uma letra: ");
    let letra = letraUsuario.toLowerCase();
    if ((letra === "a") || (letra === "e") || (letra === "i") || (letra === "o") || (letra === "u")) {
        alert("A letra que você digitou ('" + letraUsuario + "') é uma vogal.");
    } else {
        alert("A letra que você digitou ('" + letraUsuario + "') é uma consoante.");
    }
}

verificarLetra ();