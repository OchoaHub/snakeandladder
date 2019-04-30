// class Game {
//   constructor() {
//     this.tablero = new Tablero();
//     this.player = new Player();
//     this.dado = new Dado();
//   }
// }

class Tablero {
  constructor() {
    this.boxes = [];
  }
  llenar()
  {
    for(let i = 0; i < 107; i++)
    {
      this.boxes.push(i);
    }
    this.boxes[2]=50;
    this.boxes[10]=25;
    this.boxes[14]=48;
    this.boxes[27]=60;
    this.boxes[40]=80;
    this.boxes[63]=97;

    this.boxes[12]=3;
    this.boxes[21]=6;
    this.boxes[32]=16;
    this.boxes[64]=42;
    this.boxes[72]=45;
    this.boxes[90]=52;
  }
}

class Player {
  constructor(tablero) {
      this.spot = 0;
      this.tablero = tablero;
  }
  avanzar(numero)
  {
    var boxe = this.tablero;
    this.spot += numero;
    return this.spot = boxe.boxes[this.spot];
  }
}

class Dado {
    roll()
    {
      return (Math.floor(Math.random() * 6 + 1));
    }
}
