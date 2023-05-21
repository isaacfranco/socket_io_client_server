# Projeto com socket.io dividido entre cliente e servidor (dois projetos separados)

## Pre-requisitos no Windows, Mac ou Linux
* Node.js
* Git

## Quickstart

### Obter o projeto com o git
```bash
git clone git@github.com:isaacfranco/socket_io_client_server.git
```

Será criada a pasta **socket_io_client_server** com as pastas **server** e **client** dentro dela.

## Inicializar o servidor
```bash
cd server
npm install
npm start
```

Isso fará o servidor Socket.IO iniciar na porta 3000

## Inicializar o cliente
```bash
cd client
npm install
npm start
```

Isso fará iniciar o serviço do nosso cliente Socket.IO na porta 3010. Esse serviço pode ser acessado pelo navegador na URL:

http://localhost:3010/game.html


## Recursos já implementados
- [x] Servidor incia uma lista de usuários vazia assim que inicia
- [x] Cliente se conecta e recebe um aviso que a conexão como o servidor foi estabelecida (mesmo sem informar ainda o nome)
- [X] Cliente envia o nome e o servidor adiciona esse usuário na lista
- [x] Servidor envia para os clientes conectados a lista de todos os usuários que já foram criados
- [x] Cliente atualiza a lista de usuários no HTML
- [ ] Bate-Papo global
- [ ] Bate-Papo entre os usuários.
- [ ] Inciar novo jogo (entre todos os usuários)
- [ ] Cada um um digita um número e o servidor, após receber todas os números, dá o resultado final do jogo zerinho-ou-um-americano (qual o usuário escolhido)