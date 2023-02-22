let btnEnviar = document.getElementById('btnEnviar');
let result = document.getElementById('result');
//colocar sempre o valor que a gente quer recuperar dentro do addEventListener
btnEnviar.addEventListener('click', () => {
  let nome = document.querySelector('#nome').value;
  console.log(nome);
  result.innerHTML = nome;
});

//jquery

$(document).ready(() => {
  $("#titulo").text("Titulo JQuery");
  $("#text").text("Deus tem um tempo para agir e para curar. Não desista do amor, não desista de amar. Não se entregue à dor, porque ela um dia vai passar.");
  $("p").eq(1).css("background-color", "yellow");
  $("#textocss").css("text-align", "center");
  $("#textocss").css("margin-left", "50px");
});

/*
 .parent() pega o pai
 .children() pega os filhos
 .siblins() pega os relacionados
 .next() method returns the next sibling element of the selected element.
 .nextAll() method returns all next sibling elements of the selected element.
 .eq() method returns an element with a specific index number of the selected elements.
*/