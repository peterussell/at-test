import React, { Component } from 'react';
import { connect } from 'react-redux';

class LaunchesList extends Component {
  renderLaunch(launch) {
    return (
      <tr key={launch.name}>
        <td>{launch.name}</td>
        <td>{launch.net}</td>
      </tr>
    )
  }

  render() {
    if (!this.props.launches || this.props.launches.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Launch</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.launches
              .filter(launch =>
                      launch.name.toLowerCase()
                      .indexOf(this.props.filterTerm.toLowerCase()) !== -1)
              .map(this.renderLaunch)
          }
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { launches: state.launches }
}

export default connect(mapStateToProps)(LaunchesList);
