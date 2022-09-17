//obejos
const computador = {
  gabinete : {
    cpu :{
      modelo : '13' , 
      geracao : '10' , 
    }  
  },
  monitor : {
    marca : 'AOC ',
    polegadas : 27 , 
    modelo : Hero , 
    ano : 2021 , 
    resolucao : 1080 , 
    frequencia : 1440 , 
  }
}


//array
const computador2 = [
  {
    tipo : 'monitor' , 
    marca : 'AOC ',
    polegadas : 27 , 
    modelo : Hero , 
    ano : 2021 , 
    resolucao : 1080 , 
    frequencia : 1440 , 
  } , 
  {
    tipo : 'cpu' ,
    modelo : '13' , 
    geracao : '10' , 
  }  

]


//Faça a modelagem e definição de uma lista dos seus filmes favoritos. Cada filme deve conter pelo menos 3 propriedades e pelo menos um deles deve ser um array de `string`.


//lista de array
const filme = [
  //aqui eu fiz um objeto dentro da lista de array
  {
    nome : 'Velozes e Furiosos' ,
    genero : 'Ação' , 
    anoLancamento : 2001 ,

   //aqui eu fiz um array dentro de um objeto dentro de um array
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
  //aqui eu fiz um objeto dentro da lista de array
  {
    nome : 'American Pie' ,
    genero : 'Comédia' , 
    anoLancamento : 1999 ,

   //aqui eu fiz um array dentro de um objeto dentro de um array
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
  
  //aqui eu fiz um objeto dentro da lista de array
  { 
    nome : 'gente Grande' ,
    genero : 'Comédia' , 
    anoLancamento : 2010 ,

   //aqui eu fiz um array dentro de um objeto dentro de um array
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
