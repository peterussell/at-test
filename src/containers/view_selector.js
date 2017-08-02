import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectView } from '../actions/index';

class ViewSelector extends Component {
  constructor(props) {
    super(props);

    this.onViewSelect = this.onViewSelect.bind(this);
  }

  onViewSelect(e) {
    e.preventDefault();

    switch (e.target.innerText.toLowerCase()) {
      case 'launches':
        this.props.selectView('LAUNCHES_VIEW');
        break;
      case 'agencies':
        this.props.selectView('AGENCIES_VIEW');
        break;
    }
  }

  render() {
    let launchesActive = '';
    let agenciesActive = '';
    if (this.props.selectedView === 'LAUNCHES_VIEW') {
      launchesActive = 'active';
    }
    if (this.props.selectedView === 'AGENCIES_VIEW') {
      agenciesActive = 'active';
    }

    return (
      <div className="view-selector-container">
        <div className={ `selector ${launchesActive}` }>
          <a onClick={this.onViewSelect}>LAUNCHES</a><br />
        </div>
        <div className={ `selector ${agenciesActive}` }>
          <a onClick={this.onViewSelect}>AGENCIES</a><br />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectView }, dispatch);
}

function mapStateToProps(state) {
  return { selectedView: state.selectedView };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSelector);
