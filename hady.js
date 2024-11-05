const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'hady-zen', 'welcome.html'));
});

app.get('/anime', (req, res) => { 
    res.sendFile(path.join(__dirname, 'hady-zen', 'anime.html'));
});

app.get('/story', (req, res) => { 
    res.sendFile(path.join(__dirname, 'hady-zen', 'story.html'));
});

app.get('/admin', (req, res) => { 
    res.sendFile(path.join(__dirname, 'hady-zen', 'admin.html'));
});

app.listen(3001, () => {
    console.log(`
█░█ ▄▀█ █▀▄ █▄█  ▀█ █▀▀ █▄░█
█▀█ █▀█ █▄▀ ░█░  █▄ ██▄ █░▀█
  hak cipta hady zen'in 2024

LOG: Web berhasil di aktifkan!`);
});
