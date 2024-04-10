function menu() {
    let escolha = parseInt(prompt("Digite o número do sabor que você deseja: \n1-Chocolate \n2-Morango \n3-Creme \n4-Manga \n5-Melancia \n6-Vanilla Ice \n7-Céu Azul \n8-Brownie \n9-Hawaiano"));
    switch (escolha) {
        case 1:
            alert("O sabor de Chocolate custa: R$ 1,50.");
            break;
        case 2:
            alert("O sabor de Morango custa: R$ 2,50.");
            break;
        case 3:
            alert("O sabor de Creme custa: R$ 2,50.");
            break;
        case 4:
            alert("O sabor de Manga custa: R$ 3,20.");
            break;
        case 5:
            alert("O sabor de Melancia custa: R$ 3,40.");
            break;
        case 6:
            alert("O sabor de Vanilla Ice custa: R$ 3,00.");
            break;
        case 7:
            alert("O sabor de Céu Azul custa: R$ 3,60.");
            break;
        case 8:
            alert("O sabor de Brownie custa: R$ 4,00.");
            break;
        case 9:
            alert("O sabor de Hawaiano custa: R$ 5,00.");
            break;
        default:
            alert("Opção inválida.");
    }
}

menu ();
