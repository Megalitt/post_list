import axios from "axios";
import { setFetchComment, setComment } from "../redusers/postReduser";

export const getComment = (userId) => {
  return async (dispatch) => {
    dispatch(setFetchComment(true))
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
    setTimeout(() => {
      dispatch(setComment(response.data)) 
    }, 500) 
  } 
}