//Cálculo de média para N notas escolares

//N notas:
let notas = []
let nNotas = Number(prompt("Digite a quantidade de notas: "))
let somatorio = 0
let media = 0

for (let iNotas = 0; iNotas < nNotas; iNotas++){
  notas[iNotas] = Number(prompt(`Digite a nota nº ${iNotas+1}: `))
  somatorio = somatorio + notas[iNotas]
}
/*
//Teste para conferir se todas as notas digitadas estão armazenadas corretamente:
for (let iNotas = 0; iNotas < nNotas; iNotas++){
  console.log(notas[iNotas])
}
*/
media = somatorio / nNotas
media.toFixed(2)
console.log(`A média das notas digitadas é: ${media}`)
