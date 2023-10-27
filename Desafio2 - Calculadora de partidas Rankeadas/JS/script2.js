function calcularRanking(vitorias, derrotas) {

   const saldoVitorias = vitorias - derrotas;
    var nivel;

    if (saldoVitorias <= 10) {
         nivel = "Ferro";
    } else if (10 < saldoVitorias <= 20) {
         nivel = "Bronze";
    } else if (20 < saldoVitorias <= 50){
         nivel = "Prata";
    } else if (50 < saldoVitorias <= 80){
         nivel = "Ouro";
    } else if (80 < saldoVitorias <= 90){
         nivel = "Diamante";
    } else if (90 < saldoVitorias <= 100){
         nivel = "Lendário";
    } else {
         nivel = "Imortal";
    }
    return console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível de ${nivel}`)
}

//exemplo de uso
let vitorias = 69;
let derrotas = 14;
const result = calcularRanking(vitorias, derrotas);
console.log(result);