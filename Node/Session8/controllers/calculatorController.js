const router = require('express').Router();

router.get('/add', (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    if(a==undefined || b==undefined || a ==NaN || b==NaN){
        res.status(400).json({
             error:'Please provide valid parameters'
        })
        return
    }

    const result = a + b;

    res.json({
        a: a,
        b: b,
        operation: "add",
        result: result
    })
    res.end()
})
router.get('/substract', (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    const result = a - b;

    res.json({
        a: a,
        b: b,
        operation: "substract",
        result: result
    })
    res.end()
})

router.get('/divide', (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    if(!a || !b){
        res.status(400).json({
             error:'Please provide valid parameters'
        })
    }
    if(b===0){
        res.status(400).json({
            error:'Cant use 0 number'
       })
    }

    const result = a / b;

    res.json({
        a: a,
        b: b,
        operation: "divide",
        result: result
    })
    res.end()
})

router.get('/multiply', (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    const result = a * b;

    res.json({
        a: a,
        b: b,
        operation: "multiply",
        result: result
    })

    res.end()
})


router.get('/calculator',(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    const oper = req.query.operation
    
    let result

    switch(oper) {
        case 'add':
          result = a+b
          break;
        case 'substratct':
          result = a-b
          break;
        case 'divide':
          result = a/b
          break;
          case 'multiply':
            result = a*b
            break;
            default:
                res.status(400).json({error:"bad request"})
      }
})





module.exports = router