import axios from "axios";
import { setFetchUser, setUser } from "../redusers/postReduser";

export const getUser = (userId) => {
  return async (dispatch) => {
    dispatch(setFetchUser(true))
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    setTimeout(() => {
      dispatch(setUser(response.data)) 
    }, 500) 
  } 
}