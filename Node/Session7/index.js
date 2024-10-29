const express = require('express');
const db = require('./db.js')

const app = express()
app.use(express.json())

const PAGE_SIZE = 10;
app.get('/products', (req, res) => {
    let  page = Math.max((req.query.page) || 1, 1);



    const prodcuts = db.products.slice((page-1) * PAGE_SIZE, page * PAGE_SIZE);
    if(prodcuts.length ===0){
        res.status(404)
        res.end();
    }
    res.json(db.products)
});










// app.get('/products/:id',(req,res)=>{
//     const id = parseInt(req.params.id)
//     const product = db.products.find(p=>p.id === id);
//     if(!product){
//         res.status(404)
//         res.end()
//         return
//     }

//     product.supplier = db.suppliers.find(s => s.id == product.supplierId);

//     res.json(product)
// });

// app.get('/suppliers/:id/products',(req,res)=>{
//     const id = req.params.id
//     const products = db.products.filter(p => p.supplierId == id)
//     res.json(products);
// });




app.listen(8585)