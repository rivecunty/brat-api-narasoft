const express = require('express');
const { createCanvas } = require('canvas');
const app = express();

app.get('/api/image/brat', (req, res) => {
  const text = req.query.text || 'Hai';
  const canvas = createCanvas(500, 250);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, 500, 250);

  ctx.fillStyle = '#000';
  ctx.font = '30px Arial';
  ctx.fillText(text, 50, 150);

  res.setHeader('Content-Type', 'image/png');
  canvas.pngStream().pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
