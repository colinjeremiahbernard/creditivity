const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
  }

  jwt.verify(token, 'secret_key', (error, user) => {
    if (error) {
      return res.status(403).json({ message: 'Token de autenticação inválido.' });
    }

    // A autenticação foi bem-sucedida, o usuário está autorizado
    req.user = user;
    next();
  });
}

// Exemplo de uso do middleware de autenticação
app.get('/protected-route', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'Rota protegida acessada com sucesso.' });
});