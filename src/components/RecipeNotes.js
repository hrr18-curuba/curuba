import React, {Component} from 'react';

class RecipeNotes extends Component {
  render(){
    return <div> Show Note {this.props.params.id}</div>
  }

}

export default RecipeNotes;