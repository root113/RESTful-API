const express = require(`express`);
const { update } = require("../models/Post");
const router = express.Router();
const Post = require(`../models/Post`);

//*Get back all the posts
router.get(`/`, async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//*Submit a post
router.post(`/`, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get(`/exclusive`, (req, res) => {
  res.send(`You are displaying an exclusive content.`);
});

//*Specific post
router.get(`/:postID`, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postID);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//*Delete post
router.delete(`/:postID`, async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postID });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});

//*Update post
router.patch(`/:postID`, async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postID },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
