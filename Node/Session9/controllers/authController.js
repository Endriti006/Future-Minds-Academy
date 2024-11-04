const router = require('express').Router()

const { error } = require('console');
const db = require('../db');
const { generateKey } = require('crypto');

let loggedInUsers = new Map();

router.post('/login', (req, res) => {
    if(req.header.sessionid && loggedInUsers.get(req.headers.sessionid)) {
        return res.status(400).json({
            error:"You are login"
        })
    }

    const username = req.body.username;
    const password = req.body.password;

    const user = db.users.find(u => (
        u.username === username &&
        u.password === password)
    )

    if (!user) {
        res.status(401).json({
            error: "Invalid credentials"
        }).end
    }

    const sessionid = generateSessionId(60);

    loggedInUsers.set(sessionid,user)
    
    res.status(200).json({sessionid: sessionid})

    res.end()
});

function authenticate(req,res,next){
    let sessionid = req.headers.sessionid;
    
    const user = loggedInUsers.get(sessionid)

    if(!user ){
        return res.status(401).json({
            error:"You are not logged in"
        }).end()
    }

    req.user = user;
    
    next();
}

router.get("./info", authenticate,(req,res)=>{
    res.status(200).json({
        name:req.user.firstName,
        mbiemri:req.user.secondName
    }).end()
})

function generateSessionId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


module.exports = router