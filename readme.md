# Text-to-Speech Web App

Este é um simples aplicativo web que permite ao usuário digitar um texto e ouvi-lo ser lido em voz alta pelo navegador.

## Funcionalidades

- **Entrada de Texto:** Uma caixa de texto onde o usuário pode digitar o que deseja ouvir.
- **Botão "Falar":** Ao clicar, o texto digitado é convertido em fala.
- **Seleção de Voz:** Um menu dropdown permite ao usuário escolher entre as diferentes vozes disponíveis no navegador.

## Como Usar

1.  Abra o arquivo `index.html` (ou o nome do seu arquivo HTML) em um navegador web compatível.
2.  Digite o texto que você gostaria de ouvir na caixa de texto.
3.  Selecione uma voz no menu dropdown (opcional).
4.  Clique no botão "Falar".

## Compatibilidade com Navegadores

A API de Text-to-Speech (`SpeechSynthesis`) é amplamente suportada pelos principais navegadores, mas a disponibilidade de vozes pode variar.

Testes indicam bom funcionamento em:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

Em alguns navegadores, como o Brave (em testes realizados), parece ainda não ter o suporte para a funcionalidade de leitura de texto .

## Tecnologias Utilizadas

- HTML
- CSS (para estilização)
- JavaScript (para a funcionalidade de Text-to-Speech)
