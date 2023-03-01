const btnEnviarResposta = document.getElementById("btnEnviarResposta");

btnEnviarResposta.addEventListener("click", () => {
  const usuarioResposta = document.getElementById("usuarioResposta").value;
  const resultado = document.getElementById("resultado");

  const resposta = ["Bala"];
  const mensagem = {
    sucesso: "Você acertou com sucesso!",
    errou: "Você errou, a resposta correta é"
  };
 
  resposta.forEach(element => {
    if(element == usuarioResposta){
      resultado.innerHTML  = mensagem.sucesso;
      
    }else{
      resultado.innerHTML  = `${mensagem.errou} : ${element}`;       
    }
    
  });

});

