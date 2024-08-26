const Post = require('../models/Post');

exports.getAllPosts = async (req, res, next) => {
    try {
        const [posts, _] = await Post.findAll();
        res.status(200).json({count: posts.length, posts});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.createNewPost = async (req, res, next) => {
    try {
        let {name, email} = req.body;
        let post = new Post(name, email);
        post = await post.save();
        res.status(201).json({message: "Post created."})
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.getPostById = async (req, res, next) => {
    try {
        let postId = req.params.id;
        let [post, _] = await Post.findById(postId);
        res.status(200).json({post: post[0]});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.deletePostById = async(req, res, next) => {
    try {
        let postId = req.params.id;
        let [post, _] = await Post.findById(postId);
        if (post.length === 0) {
            return res.status(404).json({ message: "Post not found." });
        }
        await Post.delete(postId);
        res.status(200).json({message: "Post deleted."});
    } catch (error) {
        console.log(error);
        next(error);
    }
}
