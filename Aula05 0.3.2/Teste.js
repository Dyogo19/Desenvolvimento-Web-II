const usuarios = [
  {
    nome: 'Jorge',
    idade: 15,
    endereco: 'Alvorada City',
    avaliacoes: [
      {
        nome: 'Dyto',
        comentario: 'Estiloso',
      },
    ],
  },
  {
    nome: 'Dyogo',
    idade: 17,
    endereco: 'Alvorada City',
    avaliacoes: [
      {
        nome: 'Jorge',
        comentario: 'Engraçado',
      },
    ],
  },
  {
    nome: 'Dyto',
    idade: 17,
    endereco: 'Alvorada City',
    avaliacoes: [
      {
        nome: 'Dyogo',
        comentario: 'Engraçado',
      },
    ],
  },
];


//filtrando por idade
const usuarioQuePodeComentar = usuarios.filter(
  (usuario) => usuario.idade >= 16
);
console.log(usuarioQuePodeComentar);


//puxando comentarios
usuarios.forEach(function (usuario) {
  console.log(usuario.avaliacoes);
});
