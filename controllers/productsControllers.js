const Products = require('../model/products.js')
const Orders = require('../model/orders.js')

 //main work
  
  //1. create  product
  
  const addProduct = async (req, res) =>{
  
    let info = {
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
        
    }

    const product = await Products.create(info)
    res.status(200).send(product),
    res.json({info})
    console.log(product);
    }

//2. Get all product
const getAllProducts = async (req, res) => {

    let product = await Products.findAll({
       
    })
    res.status(200).send(product)
}

// 3. Get single todo
const getOneProducts = async(req, res) => {
    let id = req.params.id
    let product = await Products.findOne({ where: {id: id}})
    res.status(200).send(product)
}

// 4. update products
const updateProducts = async(req, res) => {

    let id = req.params.id
    let product = await Products.update(req.body, { where: {id: id}})
    res.json(product)
    
}

// 5. delete products by id

const deleteProducts = async(req, res) => {
    
    let id = req.params.id
    await Products.destory({ where: {id: id}})
    res.status(200).send('product is deleted !')
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProducts,
    updateProducts,
    deleteProducts
}

