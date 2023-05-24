import axios from "axios";
import { setFetchPost, setPost } from "../redusers/postReduser";

export const getPosts = () => {
  return async (dispatch) => {
    dispatch(setFetchPost(true))
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    setTimeout(() => {
      dispatch(setPost(response.data))  
    }, 500) 
  } 
}