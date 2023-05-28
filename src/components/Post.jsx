import React, { useState } from 'react';
import Srd from '../image/V_vUvLrWSMo.jpg';
import styles from '../styles/Post.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getComment } from './actions/comments';
import Comments from './Comments';
import { getUser } from './actions/user';


const Post = ({title, body, userId}) => {
  const [com, setCom] = useState(false);
  const dispatch = useDispatch();

  const commentHeandler = () => {
    dispatch(getComment(userId))
  };
  
  return (
    <div className={styles.post}>
      <Link onClick={() => localStorage.setItem("userId", userId)} to="/user" className={styles.link}><img src={Srd}/></Link>
      <h2>{title}</h2>
      <div>{body}</div>
      <button onClick={() => {commentHeandler(); setCom(!com)}}>
        {
          com
          ?
          <p>Скрыть</p>
          :
          <p>Комментарии</p>
        }
        </button>
        {
          com
          &&
          <Comments/>
        }
    </div>
  );
};

export default Post;