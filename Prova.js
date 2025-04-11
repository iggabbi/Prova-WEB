// Questão 1

function cumprimentar(nome, idade) {
    console.log(`Olá, ${nome}. Você tem ${idade} anos`)
}
cumprimentar('Gabriela', 16)
// "cumprimentar" é o nome da função
// "nome" e "idade" são os parâmetros
// "Gabriela" e "16" são as palavras reservadas


// Questão 2

   // Alternativa E

// Questão 3
function registrarPedido(cliente, prato, mesa, idade) {
    return {
      cliente: cliente,
      prato: prato,
      mesa: mesa,
      idade: idade
    };
  }
  
  function classificarIngresso(idade) {
      if (idade < 12) {
          return "Ingresso Infantil";
      } else if (idade >= 12 && idade <= 17) {
          return "Ingresso Adolescente";
      } else if (idade >= 18 && idade <= 59) {
          return "Ingresso Adulto"
      } else {
          return "Ingresso Sênior"
      }
  }
  
  const pedidos = ('');
  cosole.log(registrarPedido("Ana", "Hambúrguer", 1, 10));
  console.log(registrarPedido("Bruno", "Lasanha", 2, 17));
  console.log(registrarPedido("Carlos", "Feijoada", 3, 65));
  
  let pedido1 = pedidos.shift();
  let tipo1 = classificarIngresso(pedido1.idade);
  let valor1 = 29.9;
  console.log("Cliente atendido:", pedido1.pop);
  console.log("Tipo de ingresso:", tipo1);
  console.log("Valor da conta: R$", valor1.toFixed(2));
  console.log("Atendido");
  
  let pedido2 = pedidos.shift();
  let tipo2 = classificarIngresso(pedido2.idade);
  let valor2 = 29.9;
  console.log("Cliente atendido:", pedido2.pop);
  console.log("Tipo de ingresso:", tipo2);
  console.log("Valor da conta: R$", valor2.toFixed(2));
  console.log("Atendido");
  
  let pedido3 = pedidos.shift();
  let tipo3 = classificarIngresso(pedido3.idade);
  let valor3 = 29.9;
  console.log("Cliente atendido:", pop.cliente);
  console.log("Tipo de ingresso:", tipo3);
  console.log("Valor da conta: R$", valor3.toFixed(2));
  console.log("Atendido");
  
  console.log("Pedidos restantes:", pedidos.length)
  
// Questão 4  
   // Alternativa C

// Questão 5
   // Alternativa C
