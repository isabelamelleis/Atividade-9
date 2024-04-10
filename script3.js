function pedirBrutosGastos () {
    let brutoMensal = 0;
    let gastoMensal = 0;
    let totalBruto = 0;
    let totalGastos = 0;
    let saldo = 0;
    for (let i = 0; i < 12; i++) {
        brutoMensal = parseFloat(prompt("Digite o ganho bruto do " + (i + 1) + "º mês:"));
        totalBruto = totalBruto + brutoMensal;
        gastoMensal = parseFloat(prompt("Digite os gastos do " + (i + 1) + "º mês:"));
        totalGastos = totalGastos + gastoMensal;
    }
    if (totalBruto > totalGastos) {
        saldo = totalBruto - totalGastos;
        alert("EMPRESA MAWER \nO ganho bruto anual foi de: R$" + totalBruto +". \nO gasto anual foi de: R$" + totalGastos + ". \nO lucro foi de: +R$" + saldo + ".");
    } else {
        saldo = totalGastos - totalBruto;
        alert("EMPRESA MAWER \nO ganho bruto anual foi de: R$" + totalBruto +". \nO gasto anual foi de: R$" + totalGastos + ". \nO prejuízo foi de: -R$" + saldo + ".");
    }
}

pedirBrutosGastos ();
