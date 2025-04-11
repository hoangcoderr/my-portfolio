import express from 'express';
import pool from '../config/database';

const router = express.Router();

// Get user info
router.get('/user-info', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM user_info LIMIT 1');
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get skill categories with skills
router.get('/skills', async (req, res) => {
  try {
    const [categories] = await pool.query('SELECT * FROM skill_categories');
    const [skills] = await pool.query('SELECT * FROM skills');
    
    const result = categories.map((category: any) => ({
      ...category,
      skills: skills.filter((skill: any) => skill.category_id === category.id)
    }));
    
    res.json(result);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get projects
router.get('/projects', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get achievements
router.get('/achievements', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM achievements ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching achievements:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get experiences
router.get('/experiences', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM experiences ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching experiences:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Submit contact message
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    await pool.query(
      'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
      [name, email, subject, message]
    );
    
    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error submitting contact message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router; 