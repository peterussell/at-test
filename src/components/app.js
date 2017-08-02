import React, { Component } from 'react';

import Header from './header';
import FilterBar from '../containers/filter_bar';
import ViewSelector from '../containers/view_selector';
import ViewContainer from '../containers/view_container';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <div className="view-wrapper">
          <span className="view-selector">
            <ViewSelector />
          </span>

          <span>
            <FilterBar />
          </span>

          <span className="view-inner-container">
            <ViewContainer />
          </span>
        </div>
      </div>
    );
  }
}
