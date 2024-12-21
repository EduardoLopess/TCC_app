import React, { useContext } from 'react';
import { MessageContext } from './MessageProvider';

const MessageComponent = () => {
  const { message, changeMessage } = useContext(MessageContext);

  // Função para escolher o estilo com base no tipo de mensagem
  const renderMessageLayout = () => {
    switch (message.type) {
      case "success":
        return (
          <div style={{ padding: "10px", backgroundColor: "green", color: "white" }}>
            <strong>Sucesso!</strong> {message.text}
          </div>
        );
      case "error":
        return (
          <div style={{ padding: "10px", backgroundColor: "red", color: "white" }}>
            <strong>Erro!</strong> {message.text}
          </div>
        );
      case "info":
        return (
          <div style={{ padding: "10px", backgroundColor: "blue", color: "white" }}>
            <strong>Informação:</strong> {message.text}
          </div>
        );
      default:
        return (
          <div style={{ padding: "10px", backgroundColor: "gray", color: "white" }}>
            <strong>Mensagem desconhecida!</strong>
          </div>
        );
    }
  };

  return (
    <div>
      {renderMessageLayout()}

      <button onClick={() => changeMessage("Tudo deu certo!", "success")}>
        Sucesso
      </button>
      <button onClick={() => changeMessage("Algo deu errado!", "error")}>
        Erro
      </button>
      <button onClick={() => changeMessage("Aqui está uma mensagem informativa.", "info")}>
        Informação
      </button>
    </div>
  );
};

export default MessageComponent;
