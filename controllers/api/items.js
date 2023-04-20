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
    try {
      const newItem = new Item({
        name: req.body.name,
        quantity: req.body.quantity
      });
      const savedItem = await newItem.save();
      res.json(savedItem);
    } catch (err) {
      console.error(err);
      res.status(503).json({ message: 'Error creating new item' });
    }
  }

async function remove(req, res) {
    const items = await Item.find({});
    res.json(items);
}
async function edit(req, res) {
    const items = await Item.find({});
    res.json(items);
}

