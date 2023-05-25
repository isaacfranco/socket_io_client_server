let nome;
const nomeInput = document.getElementById('nomeInput');
const serverSocket = io('ws://localhost:3000');

function entrar(event) {
  nome = nomeInput.value;
  serverSocket.emit('entrar', nome);

}

function enviarMensagemPara(event) {
  const msgParaSocketId = document.getElementById('msgParaSocketId')
  const msgParaTexto = document.getElementById('msgParaTexto')

  const dados = {
    socketId: msgParaSocketId.value,
    texto: msgParaTexto.value
  }

  serverSocket.emit('enviarMensagemPara', dados)
  
}

serverSocket.on('mensagem', (msg) => {
  const mensagens = document.getElementById('mensagens')
  mensagens.innerHTML += `<p>${msg}</p>`
  console.log(msg)
})

serverSocket.on('players', (players) => {
  console.log('players', players)
  const playersDiv = document.getElementById('mundica');
  playersDiv.innerHTML = '';
  players.forEach(player => {
    playersDiv.innerHTML += `<p>${player.nome} - ${player.socketId}</p>`
  });


}
)


serverSocket.on('erro', (erroMensagem) => {
 alert(erroMensagem);

}
)
