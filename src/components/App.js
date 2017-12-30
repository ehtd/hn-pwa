import React, { Component } from 'react';
import '../css/App.css';
import HN from '../HN';
import { ContentEnum } from '../ContentEnum';

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
    return (
      <div className="">
      {
        this.state.top.map((story) => {
          const kids = story.kids || [];
          return <p>{story.title} - {story.url} - {kids.length}</p>
        })
      }
      </div>
    );
  }
}

export default App;
