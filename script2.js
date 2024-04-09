function lancamento(inicioContagem) {
    if (inicioContagem <= 0) {
        console.log("Digite um tempo inicial inválido.");
        return;
    }
    let contador = setInterval(function() {
        console.log(inicioContagem);
        inicioContagem--;
        if (inicioContagem < 1) {
            clearInterval(contador);
            console.log("HORA DO LANÇAMENTO!!");
        }
    }, 1000); //Serve para deixar em segundos o intervalo de contagem
}
let inicioContagem = prompt("Digite a contagem regressiva para o lançamento: ")
lancamento(inicioContagem);