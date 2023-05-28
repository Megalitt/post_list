import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import User from './components/User';
import { getPosts } from '../src/components/actions/posts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, []);
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<AboutMe/>}/>
        <Route path='user' element={<User/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
