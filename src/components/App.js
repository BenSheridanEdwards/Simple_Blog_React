import React, { Component } from 'react';
import PostList from './PostList'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div style={{ background: '#fff5d7'}}>
        <div className="ui container" style={{ padding: '25px'}} data-test="component-app">
          <h1 style={{ fontFamily: 'Pacifico', textAlign: "center", paddingBottom: '20px'}}>Simple Blog</h1>
          <PostList />
        </div>
      </div>
    );
  };
}

export default App;
