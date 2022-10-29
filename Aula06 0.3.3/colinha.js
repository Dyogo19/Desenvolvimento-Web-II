const medicos = [
  {
    nome: 'Leticia',
    sobrenome: 'Costana',
    genero: 'feminino',
  },
  {
    nome: 'Adimaldo',
    sobrenome: 'Pinto',
    genero: 'masculino',
  },
  {
    nome: 'Noah',
    sobrenome: 'Lutus',
    genero: 'nao-binario',
  },
];

//criando uma função que irá retornar um array de strings
function filtrarPorSexos() {
  const medicos = medicos.filter((medico) => genero === 'masculino');
}

//criando uma funcao
function retornaArray() {
  //criando um array que recebe strings
  const array = [];
  medicos.forEach((medico) => {
    if (medico.genero === 'masculino') {
      array.push('Dr ' + medico.nome + ' ' + medico.sobrenome);
    } else if (medico.genero === 'feminino') {
      array.push('Dr(a) ' + medico.nome + ' ' + medico.sobrenome);
    } else if (medico.genero === 'nao-binario') {
      array.push('Dr(e) ' + medico.nome + ' ' + medico.sobrenome);
    }
  });
  return array;
}
console.log(retornaArray());
