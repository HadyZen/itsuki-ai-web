const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'hady-zen', 'welcome.html'));
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3000');
});
