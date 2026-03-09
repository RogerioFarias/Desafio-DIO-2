let resultado
function podioRankeada(numeroVitoria, numeroDerrota){
    let resultado = numeroVitoria - numeroDerrota
    return resultado
}
resultado = podioRankeada(5, 5)

switch(resultado > 0){
    case resultado > 0 && resultado <= 10:
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Ferro")
        break;
    case resultado > 10 && resultado <= 20:
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Bronze")
        break;
    case resultado > 20 && resultado <= 50:
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Prata")
        break;
    case resultado > 50 && resultado <= 80:
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Ouro")
        break;
    case resultado > 80 && resultado <= 90:
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Diamante")
        break;
    case resultado > 90 && resultado <= 100:
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Lendário")
        break;
    case resultado > 100:
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Imortal")
        break;
}
