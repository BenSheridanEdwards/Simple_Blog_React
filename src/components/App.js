import React, { Component } from 'react';
import PostList from './PostList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="ui container" data-test="component-app"><PostList /></div>
    );
  };
}

export default App;
