const fs = require('fs');
const path = require('path');

// Caminho para o arquivo
const filePath = path.join(__dirname, 'meuArquivo.txt');

// **1. Escrever no Arquivo**
fs.writeFile(filePath, 'Olá, Mundo!', (err) => {
  if (err) {
    console.error('Erro ao escrever o arquivo:', err);
    return;
  }
  console.log('Arquivo criado e escrito com sucesso!');

  // **2. Ler o Arquivo**
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return;
    }
    console.log('Conteúdo do arquivo:', data);

    // **3. Adicionar Texto ao Arquivo**
    fs.appendFile(filePath, '\nAdicionando nova linha!', (err) => {
      if (err) {
        console.error('Erro ao adicionar texto:', err);
        return;
      }
      console.log('Texto adicionado com sucesso!');

      // **4. Renomear o Arquivo**
      const newFilePath = path.join(__dirname, 'novoArquivo.txt');
      fs.rename(filePath, newFilePath, (err) => {
        if (err) {
          console.error('Erro ao renomear o arquivo:', err);
          return;
        }
        console.log('Arquivo renomeado para novoArquivo.txt');

        // **5. Deletar o Arquivo**
        fs.unlink(newFilePath, (err) => {
          if (err) {
            console.error('Erro ao deletar o arquivo:', err);
            return;
          }
          console.log('Arquivo deletado com sucesso!');
        });
      });
    });
  });
});
