import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader'

class PostList extends React.Component {
  
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (

  <div class="ui card" style={{ width: '100%', background: '#ffaaab'}} key={post.id}>
    <div class="content">
      <i class="right floated like icon"></i>
      <div class="header">
        <h2 style={{ textColor: '#2F1728'}}>{post.title}</h2>
      </div>
      <div class="description">
        <p>{post.body}</p>
      </div>
    </div>
    <div class="extra content">
      <span class="left floated like">
      <i class="like icon"></i>
      </span>
      <span class="left floated like" style={{ color: '#fff5d7'}}>
        Like
      </span>
      <span class="right floated" style={{ color: '#fff5d7'}}>
        Post by <UserHeader userId={post.userId}/>  
      </span>
    </div>
  </div>
      )
    })
  }
  
  render() {
    return <div className="ui relaxed divided list" data-test="component-post-list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state)  => {
  return { posts: state.posts }
}

export default connect(
  mapStateToProps, 
  { fetchPostsAndUsers }
)(PostList);
