Exemplo de exceção no JS

try {
  let x = 10;
  let y = x / 0; // Não gera erro (em JS, 10/0 é Infinity)
  console.log(y);

  JSON.parse("{invalid: json}"); // Aqui ocorre um erro
} catch (error) {
  console.error('Erro capturado:', error.message);
}

try: Contém o código que pode lançar erros.
catch: Captura o erro e o trata sem que o programa "quebre".

Exemplo com Validação:
javascript
Copiar código
function dividir(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida!');
  }
  return a / b;
}

try {
  console.log(dividir(10, 2)); // Funciona
  console.log(dividir(10, 0)); // Lança erro
} catch (error) {
  console.error('Erro capturado:', error.message);
}
throw: Interrompe o fluxo normal e envia uma mensagem de erro customizada.