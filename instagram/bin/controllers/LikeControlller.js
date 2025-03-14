const Post = require("../models/Post");

module.exports = {
    async store(req,res) {
        const post = await Post.findByid(req.params.id);

        post.likes += 1;

    await post.save();

    req.io.emit("like", post);

    return res.json(post);
    }
};