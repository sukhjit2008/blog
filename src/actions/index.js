import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceholder';



export const fetchPostsAndUsers=()=> async (dispatch,getState) =>{
   await dispatch(getPosts());
  const id= _.uniq( _.map(getState().posts,'userId'))
    id.map((id)=>dispatch(getUsers(id)))
}


export const getPosts =()=> async dispatch=>{
const response = await jsonPlaceHolder.get('/posts');
dispatch({type:'FETCH_POSTS',payload:response.data})
}


export const getUsers =(id)=> async dispatch=>{
    const response = await jsonPlaceHolder.get(`/users/${id}`)
    dispatch({type:'FETCH_USERS',payload:response.data});
}