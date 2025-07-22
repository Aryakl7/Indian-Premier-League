const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db'); // Assuming db.js is in the same folder

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Allow requests from your React app
app.use(express.json()); // Parse JSON bodies

// --- API Routes ---

// GET all teams
app.get('/api/teams', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM teams ORDER BY name ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// GET a single team by ID
app.get('/api/teams/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const teamResult = await db.query('SELECT * FROM teams WHERE id = $1', [id]);
        if (teamResult.rows.length === 0) {
            return res.status(404).json({ msg: 'Team not found' });
        }
        // Optionally, fetch players of this team
        const playersResult = await db.query('SELECT id, name, role, image_url FROM players WHERE team_id = $1 ORDER BY name ASC', [id]);
        res.json({ team: teamResult.rows[0], players: playersResult.rows });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// GET all matches (with team names)
app.get('/api/matches', async (req, res) => {
  try {
    const query = `
      SELECT
        m.id, m.match_number, m.venue, m.match_date, m.status, m.result_summary,
        t1.name AS team1_name, t1.short_name AS team1_short_name, t1.logo_url AS team1_logo,
        t2.name AS team2_name, t2.short_name AS team2_short_name, t2.logo_url AS team2_logo,
        wt.name AS winning_team_name,
        p.name AS player_of_the_match_name
      FROM matches m
      JOIN teams t1 ON m.team1_id = t1.id
      JOIN teams t2 ON m.team2_id = t2.id
      LEFT JOIN teams wt ON m.winning_team_id = wt.id
      LEFT JOIN players p ON m.player_of_the_match_id = p.id
      ORDER BY m.match_date DESC;
    `;
    const result = await db.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// GET points table
app.get('/api/points-table', async (req, res) => {
    try {
        const query = `
            SELECT
                pt.team_id,
                t.name AS team_name,
                t.logo_url AS team_logo,
                pt.matches_played,
                pt.wins,
                pt.losses,
                pt.ties,
                pt.no_result,
                pt.points,
                pt.net_run_rate
            FROM points_table pt
            JOIN teams t ON pt.team_id = t.id
            ORDER BY pt.points DESC, pt.net_run_rate DESC, pt.wins DESC;
        `;
        const result = await db.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// GET news articles
app.get('/api/news', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM news_articles ORDER BY published_at DESC LIMIT 20');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// Add more routes for players, individual matches, etc.
// POST, PUT, DELETE routes would be needed for an Admin Panel

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});