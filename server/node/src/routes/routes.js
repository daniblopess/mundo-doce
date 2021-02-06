const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')

router.get('/', ProdutoController.getProdutos)

module.exports = router