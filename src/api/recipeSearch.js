import {appID, appKey} from '../../config';


export default function recipeSearch(keyword, callback) {
  fetch(`http://api.yummly.com/v1/api/recipes?_app_id=${appID}&_app_key=${appKey}&q=${keyword}
&requirePictures=true`)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    callback(data);
  }).catch(function(err) {
    console.log('Error ', err);
  });
}
