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
    <>
      <SearchBar keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch} />
      {/* #2 bug fixed removed  */}
      { !posts.length ? <h1>No posts</h1> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

const SearchBar = ({ keyword, setKeyword, handleSearch }) => {
  const classes = useStyles();
  return (
    <div className={classes.searchBar}>
      <input
        type="text"
        placeholder="Search posts by title, tags and creators"
        className={classes.searchInput}
        aria-label="Search"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
      />
      <button type="button" onClick={() => handleSearch()} className={classes.searchButton}>Search</button>
    </div>
  );
};

export default Posts;
