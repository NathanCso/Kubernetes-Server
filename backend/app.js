const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware pour permettre les CORS 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Route API pour retourner les données
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Bonjour du serveur Backend!',
    timestamp: new Date().toISOString()
  });
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur Backend en cours d'exécution sur http://localhost:${port}`);
});
