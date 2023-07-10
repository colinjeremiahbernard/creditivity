import React, { useState } from 'react';

function LoanForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar a solicitação de empréstimo
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Valor do Empréstimo"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default LoanForm;