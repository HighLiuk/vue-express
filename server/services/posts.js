const { Post } = require("../models")

async function getPosts() {
  return await Post.findAll()
}

async function createPost(text) {
  return await Post.create({ text })
}

async function deletePost(uuid) {
  const post = await Post.findOne({
    where: { uuid },
    rejectOnEmpty: true,
  })
  await post.destroy()
  return post
}

module.exports = {
  getPosts,
  createPost,
  deletePost,
}
