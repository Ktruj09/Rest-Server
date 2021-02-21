//destructuramos Router de Express
const { Router } = require('express')
const { usuarioGet, usuarioPost, usuarioPut, usuarioDelete } = require('../controllers/user')
const router = Router();

router.get('/', usuarioGet) //END GET

router.post('/', usuarioPost) //end post

router.put('/:id', usuarioPut) //end put

router.delete('/', usuarioDelete) //end delete
module.exports = router;