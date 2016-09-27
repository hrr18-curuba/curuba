import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Recipes extends Component {

  render(){
    return (
      <div>
      <div className="form-group">
      <input type="text" ref="keyword" className="form-control input-sm" placeholder="Grilled Chicken, BBQ Ribs, French Onion Soup... + Enter" />
      </div>
      </div>
    );
  }
}



export default connect(null, actions)(Recipes);