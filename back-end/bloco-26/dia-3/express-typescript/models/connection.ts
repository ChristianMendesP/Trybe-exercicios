// ./models/connection.ts

import mysql from 'mysql2/promise'; // instalar mysql2 e dotenv

import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Bg&7%2J*',
  database: 'books_api'});