//Declaramos nossas dependencias
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Para que o Css funcione quando acessado localhost
app.use(express.static('public'));

//escutando a porta 3000, os emcaminhamentos serão feitos por portas
server.listen(3000, () => {
  console.log('Server 3000 referece ao medio');
});

//Cria os endpoints dos clients
app.get('/medio/sala', function (req, res) {
  res.sendFile(__dirname + '/sala_medio.html');
});

app.get('/medio/coord', function (req, res) {
  res.sendFile(__dirname + '/coord_medio.html');
});

//Console verificações
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('send message', (data) => {
    io.emit('new message', data);
  });

  //Console verificações
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

/*
  Há necessecidade de criar mais outras coordenações, para isso criamos server.listen na porta 3001 e assim por diante
  sempre que houver necessidade. Adendo. Não sei se é a melhor pratica criar diversos servidores e se isso pode afetar
  na leitura/envio de mensagens.
*/
