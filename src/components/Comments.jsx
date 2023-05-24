import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Comments.module.css';


const Comments = () => {
  const comments = useSelector(state => state.posts.comments);
  const isFetchComment = useSelector(state => state.posts.isFetchComment);

  return (
    <div className={styles.comments}>
      <h2>Комментарии</h2>
      {
        isFetchComment ===false
        ?
        <ul>
          {comments.map((coment, i) =>
            <li key={i}><span>{coment.email}</span><br/>{coment.body}</li>
          )}
        </ul>
        :
        <div className={styles.fetching}></div>
      }
    </div>
  );
};

export default Comments;