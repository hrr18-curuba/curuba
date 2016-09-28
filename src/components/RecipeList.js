import React, { Component, PropTypes } from 'react';

export default class RecipeList extends Component {
  static propTypes = {
    actions: PropTypes.object,
    matches: PropTypes.array,
    status: PropTypes.string,
  };


  render() {
    return (
      <div>
        <div className="row">
          {

              this.props.matches.map((item, index) => {
                return (

                  <div className="col-md-3 image-item" key={`RecipeItem_${item.id}_${index}`}>
                  <ul>
                    <li>
                    {item.recipeName}
                    </li>
                  </ul>
                  </div>
                );
              })
          }
        </div>
      </div>
    );
  }
}
