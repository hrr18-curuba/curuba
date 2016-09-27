import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Recipes extends Component {
  componentWillMount(){
    this.props.fetchMessage();
  }
  render(){
    return (
      <div> Recipe Search! </div>
    );
  }
}

function mapStateToProps(state){
  return {message: state.auth.message}
}

export default connect(mapStateToProps, actions)(Recipes);