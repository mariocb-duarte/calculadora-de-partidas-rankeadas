let win = prompt("Quantidade de vitórias");
let lose = prompt("Quantidade de derrotas");

function game() {
 let rank = (win - lose);

 if (rank < 10) {
  console.log(`Com o total de: ${win} vitórias e ${lose} derrotas`); 
  console.log(`O Herói tem de saldo de: ${rank} e está no nível de Ferro`);
 } else if (rank <= 20) {
  console.log(`Com o total de: ${win} vitórias e ${lose} derrotas`); 
  console.log(`O Herói tem de saldo de: ${rank} e está no nível de Bronze`);
 } else if (rank <= 50) {
  console.log(`Com o total de: ${win} vitórias e ${lose} derrotas`); 
  console.log(`O Herói tem de saldo de: ${rank} e está no nível de Prata`);
 } else if (rank <= 80) {
  console.log(`Com o total de: ${win} vitórias e ${lose} derrotas`); 
  console.log(`O Herói tem de saldo de: ${rank} e está no nível de Ouro`);
 } else if (rank <= 90) {
  console.log(`Com o total de: ${win} vitórias e ${lose} derrotas`); 
  console.log(`O Herói tem de saldo de: ${rank} e está no nível de Diamante`);
 } else if (rank <= 100) {
  console.log(`Com o total de: ${win} vitórias e ${lose} derrotas`); 
  console.log(`O Herói tem de saldo de: ${rank} e está no nível de Lendário`);
 } else { 
  console.log(`Com o total de: ${win} vitórias e ${lose} derrotas`); 
  console.log(`O Herói tem de saldo de: ${rank} e está no nível de Imortal`);
 };
};

game();