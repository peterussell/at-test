import React, { Component } from 'react';
import { connect } from 'react-redux';

class AgenciesList extends Component {
  renderAgency(agency) {
    return (
      <tr key={agency.name}>
        <td>{agency.name}</td>
        <td className="break-me">{agency.countryCode}</td>
      </tr>
    )
  }

  render() {
    if (!this.props.agencies || this.props.agencies.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Agency</th>
              <th>Country Code</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.agencies
                .filter(agency =>
                        agency.name.toLowerCase()
                        .indexOf(this.props.filterTerm.toLowerCase()) !== -1)
                .map(this.renderAgency)
            }
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { agencies: state.agencies };
}

export default connect(mapStateToProps)(AgenciesList);
