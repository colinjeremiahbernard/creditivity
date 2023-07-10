const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

// Rota de registro de usuário
app.post('/register', async (req, res) => {
  try {
    // Obtém o nome de usuário e a senha do corpo da solicitação
    const { username, password } = req.body;

    // Gera o hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Lógica para salvar o usuário no banco de dados

    res.status(201).json({ message: 'Usuário registrado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar o usuário.' });
  }
});

// Rota de login do usuário
app.post('/login', async (req, res) => {
  try {
    // Obtém o nome de usuário e a senha do corpo da solicitação
    const { username, password } = req.body;

    // Lógica para verificar o usuário no banco de dados

    // Verifica se a senha fornecida corresponde à senha armazenada no banco de dados
    const isPasswordMatched = await bcrypt.compare(password, hashedPassword);

    if (isPasswordMatched) {
      // Gera um token de autenticação
      const token = jwt.sign({ username }, 'secret_key');

      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao fazer login.' });
  }
});

app.listen(3000, () => {
  console.log('Servidor de autenticação iniciado na porta 3000.');
});