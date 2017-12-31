import React, { Component } from 'react';
import '../css/App.css';
import HN from '../HN';
import { ContentEnum } from '../ContentEnum';
import Story from './Story'

class App extends Component {

  constructor() {
    super();

    this.state = {
      top: []
    };

    this.addTopStories = this.addTopStories.bind(this);

    this.hntop = new HN(ContentEnum.TOP);
    this.hntop.fetch()
    .then((stories) => {
      console.log(stories);
      this.addTopStories(stories);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  addTopStories(stories) {
    const current = [...this.state.top];
    console.log(current);
    const topStories = [...current, ...stories];
    this.setState({
      top: topStories
    });
  }

  render() {
    const stories = [];
    for(let i = 0; i<this.state.top.length; i++) {
      const story = this.state.top[i];
      stories.push(<Story key={story.id} data={story} index={i+1}/>);
    }

    return (
      <div className="container-vertical">
      {
        stories
      }
      </div>
    );
  }
}

export default App;
