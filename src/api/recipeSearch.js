import {appId, appKey} from '../../config';


export default function recipeSearch(keyword, callback) {
  fetch(`http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${appKey}&q=${keyword}
&requirePictures=true`)
   .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
}