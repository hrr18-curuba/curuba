import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchRecipe} from '../actions/index'
import {Link} from 'react-router';

class CurrentRecipe extends Component {
  static contextTypes ={
    router: PropTypes.object
  }
  componentWillMount(){
    this.props.fetchRecipe(this.props.params.id);
  }

  render(){
    if(!this.props.currentRecipe){
      console.log(this.props);
      return <div> Coming Soon... </div>
    }

    return(
  <div>
  <Link to="recipes" > Recipe Search </Link>
  <h2>  {this.props.currentRecipe.name}</h2>
  <p> {this.props.currentRecipe.ingredientLines} </p>
  <img className="img-responsive" src={this.props.currentRecipe.images["0"].hostedLargeUrl} alt="" />
  </div>
    )
  }

}
function mapStateToProps(state){

  return {currentRecipe: state.currentRecipe.recipe};
}

export default connect(mapStateToProps, {fetchRecipe})(CurrentRecipe);