const Item = require('../../models/item');

module.exports = {
    index,
    create,
    remove,
    edit
};

async function index(req, res) {
    const items = await Item.find({});
    res.json(items);
}
async function create(req, res) {
    const items = await Item.create(req.body);
    res.json(items);
}

async function remove(req, res) {
    const items = await Item.find({});
    res.json(items);
}
async function edit(req, res) {
    const items = await Item.find({});
    res.json(items);
}

