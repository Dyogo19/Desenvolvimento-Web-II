//**Enunciado I:** Cria um novo array com apenas o título e o ano de lançamento dos filmes.

//**Enunciado II:** Cria um novo array e adicione um atributo chamado `id` que é gerado de forma incremental.

const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
];

const FiltrarPorNomeEGenero = filmes.map((filme) => {
  return {
    nome: [filme.nome],
    anoLancamento: [filme.lancamento],
  };
});
id = 1;
const AcresentandoId = filmes.map((filme) => {
  return {
    ID: id++,
    nome: [filme.nome],
    anoLancamento: [filme.lancamento],
    diretores: [filme.diretores],
    genero: [filme.generos],
  };
});

console.log(FiltrarPorNomeEGenero);
console.log(AcresentandoId);
