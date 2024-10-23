const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.json());

const apiKey = 'AIzaSyA8PBFq-iXXc7--qN2Hvq0x_XPbuW0T6kc';

const apiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

app.get('/gemini', async (req, res) => {
    const text = req.query.text || '';

    try {
        const data = {
            contents: [
                {
                    parts: [
                        {
                            hasil: text
                        }
                    ]
                }
            ]
        };

        const response = await axios.post(apiEndpoint, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const answer = response.data.candidates[0].content.parts[0].text;

        // Kirimkan objek dengan jawaban
        res.json({ answer });
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).json({ error: 'Error fetching data from API' });
        res.status(404).json({ error: 'Text not found'});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
