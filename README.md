# Monitor-de-Chamados
Um monitor que recebe solicitação de chamado para atender a um local físico.
# Por que?
O projeto foi criado para substituir um metodo antigo de chamado em salas de aulas. Usavam uma tomada de luz que ascendia uma respectiva lampada em um ponto central ( Coordenação), o custo com infraestrutura era custozo e a impossibilidade de uma mudança de curto prazo ou até mesmo médio prazo era impossível.
# Como foi feito?
Usando as linguagens de marcações Html e CSS junto com as linguagens de programação Javascript/Nodejs. Usamos Socket.io para comunicação em tempo real entre cliente(sala) e coordenção(Servidor).
# Como funciona?
Um html para sala e outro para servidor, o html Sala(Client.1) envia a mensagem quando pressionado botão para o servidor em nodejs com socket.io, express e http, o servidor recebe essa informação e envia para o Socket, que por sua vez a Coordenação(Client.2) que está "escutando" em tempo real, quando recebe mensagem imprime na tela.
