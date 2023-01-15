# Desafio Semana 1 - Eldorado Tech Training

Projeto para desenvolver uma plataforma de E-commerce:
- Adiciona / remove itens do carrinho;
- Aplicar cupom de desconto;
- Calcula em tempo real os produtos adicionados e desconto aplicado;
- Finaliza pedido;

<img src="https://media.tenor.com/images/7e3df088fdf1753883ce518275446472/tenor.gif" height="800px">

## Front end

Execute `ng serve -o` para executar o font end da aplicação. Automaticament abrirá em seu navegador padrão.

## Backend

Execute `npm i -g json-server` para instalar a biblioteca JSON-SERVER 

Execute o comando `json-server --watch database.json` a partir da pasta `backend` inclusa na pasta raiz do projeto.

O servidor deve executar como `http://localhost:3000`

Rotas:
- /cupons
- /itens

Documentação da biblioteca:
<a href="https://www.npmjs.com/package/json-server"> JSON-SERVER </a>
