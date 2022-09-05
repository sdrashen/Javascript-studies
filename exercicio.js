class player {
  nome
  hp
  xp
  envenenado = false

  constructor(nome, hp, xp) {
    this.nome = nome
    this.hp = hp
    this.xp = xp
  }

  efetuaAtaque() {
    console.log(this.nome, 'atacou')
  }

  sofreAtaque() {
    console.log(this.nome, 'foi atacado')
  }
}

if (player.envenenado) console.log('Game over')
else console.log("Let's go!")

const specialist = new player('Aingra', 500, 10)
const warrior = new player('Billy', 500, 09)
console.log(specialist)
console.log(warrior)

specialist.efetuaAtaque()
warrior.sofreAtaque()
