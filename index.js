import express from 'express';
import pg from 'pg'
const app = express()
const port = 3000
const {pool} = pg

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
})