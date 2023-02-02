import express from 'express'
import { Router } from 'express'
import {pool} from './db.js'

const router = Router()
const app = express()

router.get('/', (req, res) => res.render('index.ejs',{title:'First Website with Node.js'}))

router.get('/about', (req, res) => res.render('about.ejs',{title:'About Me'}))

router.get('/contact', (req, res) => res.render('contact.ejs',{title:'Contact Page'}))

router.get('/usuarios', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)
});

router.get('/ping', async (req, res) => {
    const [result] = await pool.query(`SELECT "hello world" as RESULT`);
    res.json(result[0])
});

router.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO users(name) VALUES ("John")')
    res.json(result)
});

export default router 