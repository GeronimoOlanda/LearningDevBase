let nome = "Geronimo";
const sobrenome = "Olanda";

const ListaAlimentos = ["Arroz", "Feijão", "Carne", "Frango", "Salsicha", "Linguiça"];

const DadosCompletos = {
  NomeCompleto: 'Geronimo Olanda',
  Religiao: "Cristão",
  TemploFrequentado: "Congregação Cristã no Brasil",
  AnosImportantes: [2023, 2019, 2020, "08/04/2022"] 
}

console.log(nome);
console.log("------------------------------------------------------------------------------------------");
for(let item in ListaAlimentos){
  console.log(`Alimento: ${ListaAlimentos[item]}`);
}
console.log("------------------------------------------------------------------------------------------");
console.log(`Nome: ${DadosCompletos.NomeCompleto}`);

console.log("------------------------------------------------------------------------------------------");
const vazio = "Vazio";
let showHiddenElement = (findElement = ["Vazio"]) => {

  findElement.forEach(element => {
    if(element == vazio){
      console.log(" nossa lista esta vazia");
    }else{
      console.log(element);
    }
  });
}
showHiddenElement(['teste1']);