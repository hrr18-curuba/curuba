import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchNote, deleteNote} from '../actions/index'
import {Link} from 'react-router';

class RecipeNotes extends Component {
  static contextTypes ={
    router: PropTypes.object
  }
  componentWillMount(){
    this.props.fetchNote(this.props.params.id);
  }

  onDeleteClick(){
    this.props.deleteNote(this.props.params.id)
    .then(() => {
      this.context.router.push('notebox')
      });
    }
  render(){
    if(!this.props.note){

      return <div> Coming Soon... </div>
    }

    return(
  <div>
  <Link to="notebox" > My NoteBox </Link>
  <button
  className=" btn btn-primary pull-right"
    onClick={this.onDeleteClick.bind(this)}>
  Delete Note
  </button>
  <h4> {this.props.note.title} </h4>
  <h5> Tags: {this.props.note.categories}</h5>
  <p> {this.props.note.content} </p>
  </div>
    )
  }

}
function mapStateToProps(state){
  return {note: state.notes.note};
}

export default connect(mapStateToProps, {fetchNote, deleteNote})(RecipeNotes);