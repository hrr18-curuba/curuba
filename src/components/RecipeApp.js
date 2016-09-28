import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import Recipes from './recipes';
import RecipeList from '../components/RecipeList';

connect(state => ({
  recipes: state.recipes.photos,
  status: state.photos.status,
}))
export default class RecipeApp extends Component {

  static propTypes = {
    status: PropTypes.string.isRequired,
    recipes: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const actions = bindActionCreators(action, this.props.dispatch);
    return (
      <div>
        <div id="header" className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 search-bar-content">
                <h1>Search on Yummly</h1>
                <Recipes actions={actions} status={this.props.status} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <RecipeList actions={actions} photos={this.props.recipes} status={this.props.status}/>
        </div>
      </div>
    );
  }
}
