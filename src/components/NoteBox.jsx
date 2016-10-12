import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNotes } from '../actions/index';

class NoteBox extends Component {
  componentWillMount() {
    this.props.fetchNotes();
  }
  renderPosts() {
    return this.props.notes.map((note) => {
      return (
        <li className="list-group-item" key={note._id} >
          <Link to={'notebox/' + note.recipeId} >
            <span className="pull-right"> {note.categories} </span>
            <strong> {note.title} </strong>
          </Link>
        </li>

      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-left">
          <Link to="recipes" className="btn btn-primary" >
          Find a Recipe
          </Link>
        </div>
        <h3> My Recipes Notes </h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
      );
  }
}


function mapStateToProps(state) {
  return { notes: state.notes.all };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNotes }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NoteBox);
