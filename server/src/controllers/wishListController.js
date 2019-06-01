exports.get = (req, res, next) => {
    req.session.page_views = 1;

    res.status(200).send({
        page_views: req.session.page_views
    });
};

exports.post = (req, res, next) => {
    console.log(res.req.body);
    // req.session.wishlist
    res.status(201).send('Requisição recebida com sucesso!');
};


exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};