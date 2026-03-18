let oxigenio = (prompt("Insira a quantidade de oxigenio restante(em livros):"));
let pessoas = Number(prompt("Insira a quatidade de pessoas em marte:"));
const consumoDiario = 15; // litros por pessoa.
// consumo total é baseada na quantidade de pessoas multiplicado pelo consumo diario por pessoa.

let consumoTotalBase = pessoas * consumoDiario;
let diasRestantes = oxigenio / consumoTotalBase;

alert(`Relatório de Marte: restam ${diasRestantes.toFixed(0)} dias de oxigenio!! `)
