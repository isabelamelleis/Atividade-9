function totalBruto (ganhosMensais) {
    return ganhosMensais.reduce((total, ganho) => total + ganho, 0);
}

function totalGastos(gastosMensais) {
    return gastosMensais.reduce((total, gasto) => total + gasto, 0);
}

function lucroOuPrejuizo (ganhoBrutoAnual, gastosAnuais) {
    return ganhoBrutoAnual >= gastosAnuais ? "lucro" : "prejuízo";
}

function calcularFinancasAnuais() {
    let ganhosMensais = [];
    let gastosMensais = [];

    for (let i = 0; i < 12; i++) {
        let ganho = parseFloat(prompt("Digite o ganho bruto para o " + (i + 1) + "º mês:"));
        let gasto = parseFloat(prompt("Digite os gastos para o " + (i + 1) + "º mês:"));
        ganhosMensais.push(ganho);
        gastosMensais.push(gasto);
    }

    let ganhoBrutoAnual = totalBruto (ganhosMensais);
    let gastosAnuais = totalGastos(gastosMensais);
    let saldoFinanceiro = ganhoBrutoAnual - gastosAnuais;

    let resultado = lucroOuPrejuizo (ganhoBrutoAnual, gastosAnuais);

    console.log("Ganho bruto anual: R$" + ganhoBrutoAnual.toFixed(2));
    console.log("Total de gastos anuais: R$" + gastosAnuais.toFixed(2));
    console.log("Saldo: R$" + saldoFinanceiro.toFixed(2));
    console.log("A empresa teve um " + resultado);
}

calcularFinancasAnuais();