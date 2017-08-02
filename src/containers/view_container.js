import React, { Component } from 'react';
import { connect } from 'react-redux';

import LaunchesList from './launches_list';
import AgenciesList from './agencies_list';

class ViewContainer extends Component {
  render() {
    let currentView = null;
    switch(this.props.selectedView) {
      case 'LAUNCHES_VIEW':
        currentView = <LaunchesList filterTerm={this.props.filterTerm} />
        break;
      case 'AGENCIES_VIEW':
        currentView = <AgenciesList filterTerm={this.props.filterTerm} />
        break;
    }
    return (
      <div className="view-container">
        {currentView}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedView: state.selectedView,
    filterTerm: state.filterTerm
   };
}

export default connect(mapStateToProps)(ViewContainer);
