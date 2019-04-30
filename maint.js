var tabla = new Tablero();
var player1 = new Player(tabla);
var player2 = new Player(tabla);
var dado = new Dado();

tabla.llenar();

console.log("Bienvenido a Serpientes y Escaleras");

let btnDado = document.querySelector('#dado');
    btnDado.addEventListener('click', function()
  {
    var numero = dado.roll();
    console.log("Tiraste un", + numero);
    console.log("P1 Estas en la posicion", + player1.avanzar(numero));

    if (player1.spot > 99) {
      console.log("Ya ganaste crack!");
    }
  });

let btnDado2 = document.querySelector('#dado2');
    btnDado2.addEventListener('click', function()
  {
    var numero = dado.roll();
    console.log("Tiraste un", + numero);
    console.log("P2 Estas en la posicion", + player2.avanzar(numero));

    if (player2.spot >= 100) {
      console.log("Ya ganaste bro!");
    }
  })
