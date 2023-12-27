const dataFinal = new Date().getTime() + 5000;

const intervalo = setInterval(function() {
  const dataAtual = new Date().getTime();

  const diferenca = dataFinal - dataAtual;

  const segundos = Math.floor(diferenca / 1000);

  const contadorElemento = document.getElementById('cronometro');
  contadorElemento.innerHTML = `Você será redirecionado(a) em ${segundos}s`;

  if (diferenca <= 0) {
    clearInterval(intervalo); 
    contadorElemento.innerHTML = '0';
  }
}, 1000);

// Redireciona para a página especificada após 5 segundos
setTimeout(function() {
  window.location.href = "https://wa.me/5511986889920?text=Olá, vim pelo Google. Gostaria de fazer um orçamento!";
}, 7000); // 7000 milissegundos = 7 segundos