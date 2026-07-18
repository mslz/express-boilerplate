const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/messages', (req, res) => {
  const message = typeof req.body.message === 'string' ? req.body.message.trim() : '';

  if (!message) {
    return res.status(400).json({ error: 'Wiadomość nie może być pusta.' });
  }

  console.log('Otrzymana wiadomość:', message);

  return res.status(201).json({
    message: `Serwer otrzymał: ${message}`
  });
});

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
