//vetores

//declaração através de 2 formas:
let cores = []
let carros = new Array()

//Atribuição:
cores = ['amarelo', 'verde', 'vermelho']
carros[0] = 'gol'
carros[1] = 'uno'
carros[2] = 'celta'

//tamanho dos vetores:
console.log(cores.length)
console.log(carros.length)

//imprimindo todo o conteúdo
for (let i = 0; i < carros.length; i++) {

  console.log(carros[i])
}
for (let i = 0; i < cores.length; i++) {

  console.log(cores[i])
}


//para cada carro imprimir todas as cores
//Ou seja, em cada iteração de carros percorrer todas as cores

for (let icarros = 0; icarros < carros.length; icarros++) {

  for (let icores = 0; icores < cores.length; icores++) {

    console.log(carros[icarros] + ' ' + cores[icores])
  }
}