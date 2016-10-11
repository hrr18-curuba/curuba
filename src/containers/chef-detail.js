import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';



class ChefDetail extends Component {
  render(){
    if(!this.props.chef){
      return <div> Select a Chef! </div>
    }
    return (
      <div>
        <h3> Chef Details:</h3>
        <div> Chef Name: {this.props.chef.name}</div>
        <div> Specialties: {this.props.chef.specialties}</div>
        <img className="img-responsive" src={this.props.chef.profile} alt="" />
        <a className="btn btn-primary" href="mailto:hello@beunprovecho.com?subject=Hire%20Chef"> Hire Me </a>

       </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    chef: state.activeChef
  }
}
export default connect(mapStateToProps)(ChefDetail);