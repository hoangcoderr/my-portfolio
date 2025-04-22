import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '103.82.36.9',
  user: 'lvnybah_dnh',
  password: '23571113Hoang',
  database: 'lvnybah_portfolio_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool; 