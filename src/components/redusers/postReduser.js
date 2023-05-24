const SET_POST = "SET_POST";
const SET_FETCH = "SET_FETCH";
const SET_COMMENT = "SET_COMMENT";
const SET_FETCH_COMMENT = "SET_FETCH_COMMENT";
const SET_USER = "SET_USER";
const SET_FETCH_USER = "SET_FETCH_USER";

const defaultState = {
  posts: [],
  comments: [],
  user: [],
  isFetchPost: true,
  isFetchComment: true,
  isFetchUser: true,
};

export default function reposReduser(state = defaultState, action) {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        posts: action.payload,
        isFetchPost: false
      }
    case SET_FETCH:
      return {
        ...state,
        isFetchPost: action.payload
      }
    case SET_COMMENT:
      return {
        ...state,
        comments: action.payload,
        isFetchComment: false
      }
    case SET_FETCH_COMMENT:
      return {
        ...state,
        isFetchComment: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isFetchUser: false
      }
    case SET_FETCH_USER:
      return {
        ...state,
        isFetchUser: action.payload
      }
    default:
      return state;
  }
};

export const setPost = (payload) => ({type: SET_POST, payload});
export const setFetchPost = (payload) => ({type: SET_FETCH, payload});
export const setComment = (payload) => ({type: SET_COMMENT, payload});
export const setFetchComment = (payload) => ({type: SET_FETCH_COMMENT, payload});
export const setUser = (payload) => ({type: SET_USER, payload});
export const setFetchUser = (payload) => ({type: SET_FETCH_USER, payload});
