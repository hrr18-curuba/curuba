import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChef } from '../actions/index';

class ChefList extends Component {
  renderList() {
    return this.props.chefs.map((chef) => {
      return (
        <li
          key={chef.name} onClick={() => this.props.selectChef(chef)}
          className="list-group-item"
        >
          {chef.name}
        </li>
        );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
      );
  }
}


function mapStateToProps(state) {
  return {
    chefs: state.chefs,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChef }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChefList);
