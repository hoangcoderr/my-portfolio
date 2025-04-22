// app.js
// This file executes npm run dev to start the development server

const { spawn } = require('child_process');

console.log('Starting development server...');

// Spawn npm run dev as a child process
const devProcess = spawn('npm', ['run', 'dev'], { 
  stdio: 'inherit',
  shell: true 
});

// Handle process exit
devProcess.on('close', (code) => {
  console.log(`Development server exited with code ${code}`);
});

// Handle errors
devProcess.on('error', (err) => {
  console.error('Failed to start development server:', err);
});