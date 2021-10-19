const PostService = require("../services/posts")

function getPosts(req, res, next) {
  PostService.getPosts()
    .then((posts) => res.status(200).json({ posts }))
    .catch(next)
}

function createPost(req, res, next) {
  const { text } = req.body
  PostService.createPost(text)
    .then((post) => res.status(201).json(post))
    .catch(next)
}

function deletePost(req, res, next) {
  const { uuid } = req.params
  PostService.deletePost(uuid)
    .then((post) => res.status(200).json(post))
    .catch(next)
}

module.exports = {
  getPosts,
  createPost,
  deletePost,
}
