// import express library
const router = require('express').Router();
// import Category and Product models
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // includes associated products
      include: { model: Product },
    });
    // output categories
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // includes its associated products
      include: { model: Product },
    });
    // if there is no category data
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    // output category
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    //send back 201
    res.status(201).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
});

module.exports = router;
