import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import Post from './Post';

const Home = () => {
  const posts = useSelector(state => state.posts.posts);
  const isFetchPost = useSelector(state => state.posts.isFetchPost);

  return (
    <div className={styles.home}>
       { 
        isFetchPost === false
        ?
        posts.map((post, i) => 
        <Post 
          title={post.title}
          body={post.body}
          key={post.id}
          userId={post.id}
        />)
        :
        <div className={styles.fetching}></div>
      }
    </div >
  );
};

export default Home;