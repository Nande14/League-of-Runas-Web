import React, { useState } from 'react';

const Adicionar = () => {
  const [text, setText] = useState('');
  const [anotacoes, setAnotacoes] = useState([]);
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleTextChange = (event) => {
    setText(event.target.value);
    setCursorPosition(event.target.selectionStart);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (text !== '') {
        setAnotacoes([...anotacoes, text]);
        setText('');
      }
    }
  };

  const salvarConteudo = () => {
    if (text !== '') {
      setAnotacoes([...anotacoes, text]);
      setText('');
    }
  };

  return (
    <div className="text-area-container">
      <textarea
        id="anotacoes"
        style={{
          fontSize: '25px',
          height: '600px',
          width: '1200px',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'left',
        }}
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        placeholder="Adicione aqui anotações sobre o que aprendeu conosco ou o
        que deseja salvar consigo para usar em suas partidas!"
        maxLength={155}
      ></textarea>
      <button
        style={{
          marginTop: '5px',
          marginLeft: '1000px',
          width: '80px',
          height: '30px',
        }}
        onClick={salvarConteudo}
      >
        Salvar
      </button>
      <div>
        {anotacoes.map((anotacao, index) => (
          <div key={index}>
            <strong>Anotação {index + 1}:</strong> {anotacao}
          </div>
        ))}
        <div>Caracteres: {cursorPosition}</div>
      </div>
      <div>

        <textarea
          style={{
            fontSize: '20px',
            height: '200px',
            width: '1200px',
            marginTop: '120px',
          }}
          value={anotacoes.join('\n')}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default Adicionar;