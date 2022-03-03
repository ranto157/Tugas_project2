const authMiddleware = require('../middlewares/auth.middleware')
const express = require('express')
const serviceRoute = require('../controller/service_controller')
const loginRoute = require('../controller/login_controller')
const router = express.Router()

const { adduservalidation } = require('../validation/users/user.validation');

router.get('/', (req, res) => {
    res.json({ message: 'Hello world welcome' })
})

router.post('/loginUser',loginRoute.LoginUser);
router.post('/create_account',adduservalidation,authMiddleware.isAuthenticate, serviceRoute.CreateAccount)
router.delete('/delete_account/:id',authMiddleware.isAuthenticate, serviceRoute.DeleteAccount)
router.post('/add_product',authMiddleware.isAuthenticate, serviceRoute.AddProduct)
router.delete('/delete_product/:id',authMiddleware.isAuthenticate, serviceRoute.DeleteProduct)
router.put('/update_product/:id',authMiddleware.isAuthenticate, serviceRoute.updateProduct)
router.get('/list_product',authMiddleware.isAuthenticate, serviceRoute.listProduct)


module.exports = router;

