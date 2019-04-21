import React, { Component } from 'react'
import {connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions/index';
import UserHead from './UserHead';
 class PostList extends Component {
     componentDidMount=()=>{
         this.props.fetchPostsAndUsers();
     }
  render() {
    
    const { posts }= this.props;
    const list = posts?(posts.slice(0,20).map((post)=>(<li key={post.id}>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <UserHead userId={post.userId}/>
    </li>))):(<p>Loading...</p>)
    return (
      <div>
        <ul>{list}</ul>
        
        </div>
    )
  }
}
const mapStateToPorps=(state)=>{
  return {
    posts:state.posts
  }
}
export default connect(mapStateToPorps,{fetchPostsAndUsers})(PostList);