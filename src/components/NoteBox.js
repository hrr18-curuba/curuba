import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchNotes} from '../actions/index';
import {Link} from 'react-router';


class NoteBox extends Component{
  componentWillMount(){
    this.props.fetchNotes();
  }

  render(){
    return (
      <div>
      <div className= "text-xs-left">
      <Link to="newnote" className="btn btn-primary" >
      Add a Note
      </Link>
      </div>
       List of notes
       </div>
      )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchNotes}, dispatch);
}


export default connect(null, mapDispatchToProps)(NoteBox);