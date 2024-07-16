const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        db.run(`CREATE TABLE IF NOT EXISTS profiles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            image_url TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            } else {
                // Insert sample data
                db.run(`INSERT INTO profiles (name, image_url) VALUES (?, ?)`,
                    ['Bradley Watson', 'https://via.placeholder.com/50'],
                    (err) => {
                        if (err) {
                            console.error('Error inserting data:', err.message);
                        }
                    });
            }
        });
    }
});

// API route to get profile data
app.get('/api/profile', (req, res) => {
    db.get('SELECT * FROM profiles WHERE id = 1', (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            name: row.name,
            image_url: row.image_url
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
