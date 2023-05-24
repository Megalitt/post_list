import React from 'react';
import styles from '../styles/User.module.css';
import Srd from '../image/V_vUvLrWSMo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './actions/user';
import { useEffect } from 'react';

const User = () => {
  const user = useSelector(state => state.posts.user);
  const posts = useSelector(state => state.posts.posts);
  const isFetchUser = useSelector(state => state.posts.isFetchUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUser(localStorage.getItem("userId")))
  }, []);

  return (
    <div className={styles.user}>
      { 
        isFetchUser === false
        ?
        user.map(userItem => 
          <div className={styles.card} key={userItem.id}>
            <img src={Srd}/>
            <p><span>Имя пользователя: </span>{userItem.name}</p><br/>
            <p><span>Email: </span>{userItem.email}</p><br/>
            <p><span>Телефон: </span>{userItem.phone}</p><br/>
            <p><span>Сайт: </span>{userItem.website}</p><br/>
            <div><span>Список постов:</span>
            <ul>
            {
            posts.filter(el => el.userId === userItem.id).map(post => 
                <li key={post.id}>{post.title}<br/>{post.body}</li>
            )}
            </ul> 
            </div><br/>
          </div>
        )
        :
        <div className={styles.fetching}></div>
      }
    </div>
  );
};

export default User;