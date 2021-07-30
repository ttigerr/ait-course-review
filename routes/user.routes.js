/* eslint-disable no-undef */

const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')
const uploadController = require('../controllers/upload.controller')
const multer = require('multer')
const upload = multer()


//auth
router.post('/register', authController.signUp)
router.post('/login', authController.signIn)
router.get('/logout', authController.logout)


//user display: 'block'
router.get('/', userController.getAllUsers)
router.get('/:id', userController.userInfo)
router.put('/:id', userController.updateUser)
router.put('/admin/:id', userController.updateAdmin)
router.delete('/:id', userController.deleteUser)

//upload
router.post('/upload', upload.single('file'), uploadController.uploadProfil)

module.exports = router