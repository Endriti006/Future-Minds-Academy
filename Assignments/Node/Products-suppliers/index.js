const express = require('express');
const db = require('./db.js')
const app = express()

app.use(express.json())

const PAGE_SIZE = 10;

app.get('/products', (req, res) => {
    let page = Math.max(parseInt(req.query.page) || 1, 1);

    const products = db.products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    if (products.length === 0){
        res.status(404);
        res.end();
    }
    else{
        res.json(products);
    }
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = db.products.find(p => p.id == id);

    if(!product){
        res.status(404);
        res.end();
        return;
    }

    product.supplier = db.suppliers.find(s => s.id == product.supplierId);

    res.json(product)
});

app.get('/suppliers/:id/products',(req, res) => {
    const id = req.params.id;
    const products = db.products.filter(p => p.supplierId == id);
    res.json(products);
} )

app.post('/products',(req,res)=>{
    const {name, price, supplierId} = req.body;

    const newProduct = {
        id: db.products.length + 1,
        name,
        price,
        supplierId
    };
    db.products.push(newProduct)

    res.status(201).json(newProduct);
})

app.put('/products/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const {name, price, supplierId} = req.body

    const product = db.products.find(p => p.id == id);

    if (product) {
        if (name !== undefined) product.name = name;
        if (price !== undefined) product.price = price;
        if (supplierId !== undefined) product.supplierId = supplierId;

        res.status(200).json({ message: 'Product updated successfully', product });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
})

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const productIndex = db.products.findIndex(p => p.id === id);

    if (productIndex !== -1) {

        const deletedProduct = db.products.splice(productIndex, 1);
        res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct[0] });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.get("/suppliers",(req,res)=>{
    res.json(db.suppliers)
})

app.post('/suppliers',(req,res)=>{
    const {name, phoneNumber, location} = req.body;

    const newSupplier = {
        id: db.products.length + 1,
        name,
        phoneNumber,
        location
    };
    db.products.push(newSupplier)

    res.status(201).json(newSupplier);
})


app.listen(8585)