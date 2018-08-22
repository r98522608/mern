const express = require('express');
const router = express.Router();


const Item = require('../../models/Items');

//  @route GET api/items
//  @desc   GET All Items
//  @access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({date:-1})
    //.then(res.json(items))
    .then(items => res.json(items))
});


//  @route POST api/items
//  @desc   POST A Post
//  @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));

});


module.exports = router;
