const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
  Post.find({}, (err, data) => {
    if (err) return res.json(err);
    res.render('posts/index', { posts: data });
  });
});

router.get('/new', (req, res) => {
  res.render('posts/new');
});

router.post('/', (req, res) => {
  Post.create(req.body, (err, data) => {
    if (err) return res.json(err);
    res.redirect('/posts');
  });
});

router.get('/:id', (req, res) => {
  Post.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.json(err);
    res.render('posts/show', { post: data });
  });
});

router.get('/:id/edit', (req, res) => {
  Post.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.json(err);
    res.render('posts/edit', { post: data });
  });
});

module.exports = router;
