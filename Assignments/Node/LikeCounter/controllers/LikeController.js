const express = require('express');
const router = express.Router();

const likesStore = {};


router.post('/like', (req, res) => {
    const { itemId } = req.query;

    if (!itemId) {
        return res.status(400).json({ error: 'Item ID is required' });
    }

    likesStore[itemId] = (likesStore[itemId] || 0) + 1;

    res.json({ itemId, likes: likesStore[itemId] });
});


router.get('/count', (req, res) => {
    const { itemId } = req.query;

    if (!itemId) {
        return res.status(400).json({ error: 'Item ID is required' });
    }

    res.json({ itemId, likes: likesStore[itemId] || 0 });
});

module.exports = router;
