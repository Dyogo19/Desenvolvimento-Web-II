function Desconto(valorCompra = 100.0, cartao, convenio , primeiraCompra) {
  const DescontoPriOCompra = 0;
  const DescontoCC = 0;
  const DescontoC = 0;
  const semConvenioCartao = valorCompra;
  const maisDeUmaCompra = valorCompra;

  if (cartao && convenio && primeiraCompra == true) {
    const DescontoCC = valorCompra * 0.20;
    if (DescontoCC > 100.0) {
      console.log('Valor de desconto excedeu o limite');
      return valorCompra - 100.00;
    }
    valorCompraTotal = valorCompra - DescontoCC;
    return valorCompraTotal;
  } else if (
    (cartao == true && convenio == false && primeiraCompra == true)  ||
    (cartao == false && convenio == true && primeiraCompra == false) 
  ) {
    const DescontoC = valorCompra * 0.15;
    if (DescontoC > 100.0) {
      console.log('Valor de desconto excedeu o limite');
      return valorCompra - 100.00;
    }
  } else if (
    (cartao == true && convenio == true && primeiraCompra == false) 
  
  ) {
    const DescontoPriOCompra = valorCompra * 0.05;
    if (DescontoC > 100.0) {
      console.log('Valor de desconto excedeu o limite');
      return valorCompra - 100.00;
    }
    const valorCompraTotal = valorCompra - DescontoPriOCompra;
    return valorCompraTotal;

  } else if (
    (cartao == false && convenio == false && primeiraCompra == true) 
  
  ) {
    const DescontoCC = valorCompra * 0.15;
    if (DescontoCC > 100.0) {
      console.log('Valor de desconto excedeu o limite');
      return valorCompra - 100.00;
    }
    const valorCompraTotal = valorCompra - DescontoPriOCompra;
    return valorCompraTotal;
  } else {
    return valorCompra;
  }
}

console.log(Desconto(1200, true, true , true));
console.log(Desconto(1000, false, false , false));
console.log(Desconto(1000, true, false , true));
console.log(Desconto(1000, false, true , false));
console.log(Desconto(1000, true, true , false));
console.log(Desconto(1000, false, false , true));
