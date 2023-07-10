import axios from 'axios';

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('/api/loan-requests', {
      name,
      amount,
    });
    // Lógica para tratar a resposta do backend
  } catch (error) {
    // Lógica para tratar erros de solicitação
  }
};
