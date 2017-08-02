import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLaunches, fetchAgencies, applyFilter } from '../actions/index';

class FilterBar extends Component {
  constructor(props) {
    super(props);

    this.state = { filterTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchLaunches();
    this.props.fetchAgencies();
  }

  onInputChange(e) {
    this.setState({ filterTerm: e.target.value });
    this.props.applyFilter(e.target.value);
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group filter-form">
        <p className="form-control-static input-group-addon">Filter</p>
        <input
          placeholder="Filter..."
          className="form-control filter-input"
          value={this.state.term}
          onChange={this.onInputChange} />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLaunches, fetchAgencies, applyFilter }, dispatch);
}

export default connect(null, mapDispatchToProps)(FilterBar);
