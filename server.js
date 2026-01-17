const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

const DATA_FILE = path.join(__dirname, 'data', 'speakers.json');
const GALLERY_DIR = path.join(__dirname, 'gallery');

// API to get all speakers
app.get('/api/speakers', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read speakers data' });
        res.json(JSON.parse(data));
    });
});

// API to add a speaker
app.post('/api/speakers', (req, res) => {
    const newSpeaker = req.body;
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        let speakers = [];
        if (!err) speakers = JSON.parse(data);

        newSpeaker.id = Date.now();
        speakers.push(newSpeaker);

        fs.writeFile(DATA_FILE, JSON.stringify(speakers, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Failed to save speaker' });
            res.json(newSpeaker);
        });
    });
});

// API to scan gallery images
app.get('/api/gallery', (req, res) => {
    fs.readdir(GALLERY_DIR, (err, files) => {
        if (err) return res.status(500).json({ error: 'Failed to read gallery folder' });
        // Filter for images only
        const images = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
        res.json(images.map(img => `/gallery/${img}`));
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
