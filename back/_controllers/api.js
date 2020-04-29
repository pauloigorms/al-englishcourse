const express = require('express');
const router = express.Router();
const api = require('_services/api');

const compression = require('compression')
const fileUp = require('express-fileupload')
router.use(fileUp())
router.use(compression())

// routes
router.post('/signup', register)
router.post('/signin', auth)
router.post('/teachers', create__teacher)
router.get('/teachers', get__teachers)
router.post('/comments', create__comment)
router.get('/comments', get__comments)

module.exports = router

function register(req, res, next) {
    api.register(req.body)
        .then((result) => res.status(201).json(result))
        .catch(err => next(err))
}

function auth(req, res, next) {
    api.auth(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Usuário ou senha estão incorretos' }))
        .catch(err => next(err))
}

function create__teacher(req, res, next) {
    api.create__teacher(req.body)
        .then((result) => res.status(201).json(result))
        .catch(err => next(err))
}

function get__teachers(req, res, next) {
    api.get__teachers(req.body)
        .then((result) => res.status(201).json(result))
        .catch(err => next(err))
}

function create__comment(req, res, next) {
    api.create__comment(req.body)
        .then((result) => res.status(201).json(result))
        .catch(err => next(err))
}

function get__comments(req, res, next) {
    api.get__comments(req.body)
        .then((result) => res.status(201).json(result))
        .catch(err => next(err))
}