import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { search, getPosts } from '../../actions/posts';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (keyword) {
      dispatch(search(keyword));
    } else {
      dispatch(getPosts());
    }
  };

  return (
    // #2 bug fixed removed <CircularProgress />
    !posts.length ? <h1>No posts</h1> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
