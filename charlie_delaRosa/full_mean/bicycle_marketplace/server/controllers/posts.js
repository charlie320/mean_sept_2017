// import mongoose
const mongoose = require('mongoose');
// import Post model
const Post = mongoose.model('Post');
const User = mongoose.model('User');

class PostsController {
  index(req, res){
    console.log("In the index method.");
    // Post.find({}, (err, Posts) => {
    Post.find({}).sort('name').exec((err, posts) => {
      if(err){
        return res.json(err);
      }
      return res.json(posts);
    })
  }

  show(req, res){
    Post.findById(req.params.id, (err, post) => {
      if(err){
        return res.json({error: '404 - Post not found' });
      }
      return res.json(post);
    })
  }

  create(req, res){
    Post.create(req.body, (err, post) => {
      if(err){
        return res.json(err);
      }
      User.findByIdAndUpdate(post.user, { $push: { posts: post._id } }, { new: true }, (err, user) => {
        if(err) {
          return res.json(err);
        }
        return res.json(post);
      })
      // look up the User who made the post
      // push post._id to the User's posts array
    })
  }

  update(req, res){
    Post.findByIdAndUpdate(req.params.id, { $set : req.body }, { runValidators: true, new: true }, (err, post) => {
      if(err){
        return res.json(err);
      }
      return res.json(post);
    })
  }

  destroy(req, res){
    Post.findByIdAndRemove(req.params.id, (err, result) => {
      if(err){
        return res.json(err);
      }
      return res.json({ "success": "Successfully deleted post." })
    });
  }
}

module.exports = new PostsController();
