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

    this.hntop = new HN(ContentEnum.TOP);
    this.hntop.fetch();
  }

  render() {
    return (
      <div className="">
      </div>
    );
  }
}

export default App;
