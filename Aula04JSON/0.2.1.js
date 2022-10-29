//Faça a modelagem e definição de uma lista dos seus filmes favoritos. Cada filme deve conter pelo menos 3 propriedades e pelo menos um deles deve ser um array de `string`.

const filme = [
  {
    nome : 'Velozes e Furiosos' ,
    genero : 'Ação' , 
    anoLancamento : 2001 ,
    atores: [
      'Vin Diesel' ,
      'Paul Walker ' , 
      'Michelle Rodriguez' ,
      'Jordana Brewster' ,  
      'Johnny Strong' ,
      'Rick Yune' , 
      'Chad Lindberg' ,
    ]
  } ,
  {
    nome : 'American Pie' ,
    genero : 'Comédia' , 
    anoLancamento : 1999 ,
    atores: [
      'Jason Biggs' ,
      'Seann William Scott' , 
      'Alyson Hannigan ' , 
      'Chris Klein' ,
      'Tara Reid' ,  
      'Eddie Kaye Thomas' ,
      'Shannon Elizabeth' , 
      'Thomas Ian Nicholas' ,
    ]
  } ,
  { 
    nome : 'gente Grande' ,
    genero : 'Comédia' , 
    anoLancamento : 2010 ,
    atores: [
      'Adam Sandler' ,
      'Kevin James' , 
      'David Spade' ,
      'Chris Rock' ,  
      'Salma Hayek' ,
      'Rob Schneider' , 
      'Dennis Dugan' ,
      'Maya Rudolph' ,
    ]
  } ,
]

console.log(filme);