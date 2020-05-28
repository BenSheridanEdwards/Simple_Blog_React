import React, { Component } from 'react';
import PostList from './PostList'
import styles from './App.module.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className={styles.body} data-test="component-app">
        <div className="ui container" style={{ padding: '25px'}}>
          <h1 className={styles.header} data-test="app-header">Simple Blog</h1>
          <PostList />
        </div>
      </div>
    );
  };
}

export default App;
