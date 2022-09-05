//A class é apenas descrição. A partir dela criamos o objeto
class Aluno {
  nome
  matricula
  ativo = true

  /*O método construtor é executado na hora da criação do
   *objeto. Ele informa para a classe
   *que o valor, hipoteticamente passado,
   *entre parenteses em new Aluno()
   *é, por exemplo, o nome do aluno.*/
  constructor(nome, matricula) {
    /*O nome passado no parâmetro do construtor
     *fica salvo no atributo nome da classe Aluno.*/
    /**Abaixo temos duas var diferentes porém com o mesmo identificado */
    /**A keyword this vem para diferenciar uma da outra.
     *"O nome desta classe recebe o valor (nesse caso *nome) que for passado no parâmetro do construtor"
     */
    /*matricula foi add depois*/
    this.nome = nome
    this.matricula = matricula
  }

  responderChamada() {
    /**Ao inserir o this.nome o aluno que respondeu presente será identificado */
    console.log(this.nome, 'presente')
  }
}

//Usando a keyword new instanciamos o objeto
/*Abaixo, estamos criando uma var (aluno1) e dentro dela
 * um novo aluno, objeto do tipo aluno*/
/**Após a adição do método constructor, podemos passar um nome para o aluno e a classe irá reconhecê-lo. */
const aluno1 = new Aluno('Luiz', 2022)
const aluno2 = new Aluno('Mara', 2023)

// aluno1.nome = 'João'
// aluno1.matricula = 22001

console.log(aluno1)
console.log(aluno2)
aluno1.responderChamada()
aluno2.responderChamada()
