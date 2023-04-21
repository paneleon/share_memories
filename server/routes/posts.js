import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost, searchPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/search', searchPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;