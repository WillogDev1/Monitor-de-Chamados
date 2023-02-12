# Monitor-de-Chamados
Um monitor que recebe solicitação de chamado para atender a um local físico.
# Por que?
O projeto foi criado para substituir um metodo antigo de chamado em salas de aulas. Usavam uma tomada de luz que ascendia uma respectiva lampada em um ponto central ( Coordenação), o custo com infraestrutura era custozo e a impossibilidade de uma mudança de curto prazo ou até mesmo médio prazo era impossível.
# Como foi feito?
Usando as linguagens de marcações Html e CSS junto com as linguagens de programação Javascript/Nodejs. Usamos Socket.io para comunicação em tempo real entre cliente(sala) e coordenção(Servidor).
# Como funciona?
Um html para sala e outro para servidor, o html Sala(Client.1) envia a mensagem quando pressionado botão para o servidor em nodejs com socket.io, express e http, o servidor recebe essa informação e envia para o Socket, que por sua vez a Coordenação(Client.2) que está "escutando" em tempo real, quando recebe mensagem imprime na tela.

<hr></hr>


![btncolor](https://user-images.githubusercontent.com/97992826/218315549-308b9ad2-ea18-43e1-a3df-73d717828f72.png)

<hr></hr>


![recevicecolor](https://user-images.githubusercontent.com/97992826/218315579-684f8f6a-f2c0-495e-9afd-0c35f85a390d.png)
