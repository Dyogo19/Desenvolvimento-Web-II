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

function filtrarPorSexos() {
  const medicos = medicos.filter((medico) => genero === 'masculino');
}

function retornaArray() {
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
