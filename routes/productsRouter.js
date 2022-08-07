const productsController = require('../controllers/productsControllers')

const router = require("express").Router()

router.post('/addProduct', productsController.addProduct)
router.get('/allProduct', productsController.getAllProducts)

router.get('/:id', productsController.getOneProducts)
router.put('/:id', productsController.updateProducts)
router.delete('/:id', productsController.deleteProducts)

module.exports = router;
