import React, { Component, PropTypes } from 'react';

export default class RecipeList extends Component {
  static propTypes = {
    actions: PropTypes.object,
    recipes: PropTypes.array,
    status: PropTypes.string,
  };


  render() {
    return (
      <div>
        <div className="row">
          {

              this.props.recipes.map((item, index) => {
                return (
                  <div className="col-md-3 image-item" key={`RecipeItem_${item.id}_${index}`}>
                    <img src={item.images.hostedLargeUrl} />
                  </div>
                );
              })
          }
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}
