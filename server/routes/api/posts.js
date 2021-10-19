const express = require("express")
const PostController = require("../../controllers/posts")

const router = express.Router()

router.get("/", PostController.getPosts)
router.post("/", PostController.createPost)
router.delete("/:uuid", PostController.deletePost)

module.exports = router
