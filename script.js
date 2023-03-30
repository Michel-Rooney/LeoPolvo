function butaoPerguntaClicked() {
  const input1 = document.getElementById('input-1').value;
  const input2 = document.getElementById('input-2').value;
  const lista = [input1, input2];

  if (tentarNovamente === false) {
    setTimeout(function() {
    tentarNovamente = true;
    butaoPergunta.innerHTML = 'Tentar Novamente';
    
      const random = Math.round(Math.random());
      textoResposta.innerHTML = lista[random];
      textoInput1.innerHTML = input1;
      textoInput2.innerHTML = input2;

      campoInput.style.display = 'none';
      resposta.style.display = 'block';
    }, 1000); 
  } else {
    tentarNovamente = false;
    butaoPergunta.innerHTML = 'RESPOSTA!';

    textoInput1.innerHTML = input1;
    textoInput2.innerHTML = input2;

    campoInput.style.display = 'block';
    resposta.style.display = 'none';
  }
}


const butaoPergunta = document.getElementById('butao-pergunta');
const textoResposta = document.getElementById('texto-resposta');
const campoInput = document.getElementById('campo-input');
const resposta = document.getElementById('resposta');
const textoInput1 = document.getElementById('texto-input-1');
const textoInput2 = document.getElementById('texto-input-2');

let tentarNovamente = false;

resposta.style.display = 'none';

butaoPergunta.addEventListener('click', butaoPerguntaClicked);