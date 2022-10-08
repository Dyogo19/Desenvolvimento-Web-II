const pessoas = [
  {
    nome: 'Dyogo',
    premium = true ,
    dataNascimento: '2005-05-19',
    cidade: ['Alvorada City'],
  },
  {
    nome: 'Jorge',
    dataNascimento: '2004-04-18',
    cidade: ['Alvorada City'],
  },
];

const resultado = pessoas.map((pessoa) => {
  let cor = 'branco';
  if(pessoa.premium){
    cor = 'dourado';
  }
  return {
    dataNascimento : pessoa.dataNascimento,
    cor,
  };
});

console.log(resultado);
