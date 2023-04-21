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

    console.log("Checking req", req.body)
    console.log("Checking req", req.body.id)
    try {
      const item = await Item.findByIdAndDelete(req.body.id);
      console.log(item)
      res.json({ success: true, item });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: "Failed to delete item." });
    }
  }
  


  async function edit(req, res) {
    try {
      const item = await Item.findByIdAndUpdate(
        req.body.id,
        { name: req.body.name, quantity: req.body.quantity },
        { new: true }
      );
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json(item);
    } catch (error) {
      console.error(error);
      res.status(503).json({ message: 'Error editing item' });
    }
  }
