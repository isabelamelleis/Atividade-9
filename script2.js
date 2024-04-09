function lancamento() {
    let inicioContagem = parseInt(prompt("Digite a contagem regressiva para o lançamento: "));
    if (inicioContagem <= 0) {
        alert("Digite um tempo inicial válido.");
    }
    let contador = setInterval(function() {
        console.log(inicioContagem);
        inicioContagem--;
        if (inicioContagem < 1) {
            clearInterval(contador);
            alert("HORA DO LANÇAMENTO!!");
        }
    }, 1000); //Essa função é o que faz a contagem funcionar, e o "1000" serve para deixar em segundos o intervalo de contagem
}

lancamento();