const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    obj ={
        name: "Joginder",
        number: 786
    }
    res.json(obj);
});

module.exports = router;