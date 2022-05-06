const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      // includes associated products
      include: { model: Product },
    });
    // output tags
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // includes its associated products
      include: { model: Product },
    });
    // if there is no tag data at the specified id
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    // output response to user
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    //send back 201 and new tag
    res.status(201).json(tagData);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(
      {
        //update tag name with user input
        tag_name: req.body.tag_name,
      },
      {
        // where the id of the tag in the tag table is equal to the id in the url 
        where: {
          id: req.params.id,
        }
      }
    );
    // if there is no tag data at the specified id
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    // send back updated tag
    res.status(200).end();
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    // if there is no tag data at the specified id
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    // output response to user
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// export the Tag router object
module.exports = router;
