const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key'; // Clave para firmar tokens
const USERS = [
  { username: 'admin', password: 'password123', role: 'admin' },
  { username: 'user', password: 'userpass', role: 'user' },
];

app.use(cors());
app.use(bodyParser.json());

// Endpoint de autenticación
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
  }
  return res.status(401).json({ message: 'Credenciales inválidas' });
});

// Verificar token (opcional)
app.get('/verify-token', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // "Bearer <token>"
  if (!token) return res.status(403).json({ message: 'Token requerido' });

  try {
    const payload = jwt.verify(token, SECRET_KEY);
    return res.json({ valid: true, payload });
  } catch (err) {
    return res.status(403).json({ valid: false, message: 'Token inválido' });
  }
});

app.listen(PORT, () => console.log(`Servidor de autenticación en http://localhost:${PORT}`));
