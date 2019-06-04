const Products = require('../models/Products');
const get = require('lodash/get');

const createObjectReturn = (wishList) =>  {
    return {
        data: wishList
    }
}

exports.get = (req, res, next) => {
    
    let wishList = [];
    
    if (req.session.wishList) {
        wishList = req.session.wishList;
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(createObjectReturn(wishList));
};

exports.post = (req, res, next) => {


    if(req.session.page_views){
        req.session.page_views++;
        // res.send("You visited this page " + req.session.page_views + " times");
     } else {
        req.session.page_views = 1;
        // res.send("Welcome to this page for the first time!");
     }

     console.log(req.session.page_views);

    const product = Products.getById(req.body.productId);  
    const item = {
        productId: get(product, "id"),
        name: get(product, "subtitle"),
        price: get(product, "price"),
        image: get(product, "image")
    }
    console.log("wish -->", req.session.wishList);
    if(req.session.wishList) {
        req.session.wishList.push(item)
    } else {
        req.session.wishList = [];
        req.session.wishList.push(item);
    }
    req.session.save();
    console.log("criado --> ", req.session.wishList);
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(201).send(createObjectReturn(req.session.wishList));
};


exports.delete = (req, res, next) => {
    
    const id = req.params.productId;
    
    let wishList = [];

    if(req.session.wishList) {
        wishList = req.session.wishList.filter(b => b.productId !== id);
    }
    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(201).send(createObjectReturn(wishList));
};