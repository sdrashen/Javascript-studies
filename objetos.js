const aluno = {
  //Propriedades. Normalmente são substantivos
  nome: 'Lucas',
  matricula: 2201,
  ativo: true,
  //Métodos. Normalmente são verbos
  responderChamada: () => {
    console.log('presente')
  }
}

console.log(aluno.nome, aluno.matricula)

if (aluno.ativo) console.log('Aluno ativo')
else console.log('Aluno inativo')

//Ao executar um method sempre colocar ()
aluno.responderChamada()
