const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
    dias: 10,
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
    dias: 5,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
    dias: 60,
  },
];

function filtrarTarefasConcluidas() {
  const tarefasConcluidas = tarefas.filter(
    (tarefa) => tarefa.concluida === true
  );
  return tarefasConcluidas;
}

function filtrarTarefasNaoConcluidas() {
  const tarefasNaoConcluidas = tarefas.filter(
    (tarefa) => tarefa.concluida === false
  );
  return tarefasNaoConcluidas;
}

function filtrartarefasCriadasEConcluidasAbaixoDe30Dias() {
  const tarefasCriadasEConcluidasAbaixoDe30Dias = tarefas.filter(
    (tarefa) => tarefa.dias <= 30 && tarefa.concluida === true
  );
  return tarefasCriadasEConcluidasAbaixoDe30Dias;
}
// "()" execucao de funcao
console.log(filtrarTarefasConcluidas());
console.log(filtrarTarefasNaoConcluidas());
console.log(filtrartarefasCriadasEConcluidasAbaixoDe30Dias());
