import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import LatestPost from './latest_post';
import Asset from './asset';

class Home extends Component {
  renderBanner() {
    return (
      <div id="banner">
      </div>
    );
  };
  renderLatestPost() {
    return (
      <div className="container">
        <LatestPost />
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.renderBanner()}
        {this.renderLatestPost()}
      </div>
    );
  }
}

export default Home;
