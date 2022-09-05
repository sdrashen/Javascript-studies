class Pessoa {
  nome
  endereco
  cpf
  constructor(nome) {
    this.nome = nome
  }

  //Obs: Métodos também podem ser passados como herança
}

class Estudante extends Pessoa {
  //Tudo o que a classe Pessoa tem, agora o Aluno também tem
  matricula
  ativo = true

  // responderChamada() {
  //   console.log(this.nome, 'presente')
  // }
}

class Funcionario extends Pessoa {
  salario
}

const aluno01 = new Estudante()
const func = new Funcionario()

console.log(aluno01)
console.log(func)
