import {renderComponent, expect} from '../test_helper';
import RecipeApp from '../../src/components/RecipeApp';

describe ('RecipeApp', () =>{
  it('has a text area', () =>{

    const component = renderComponent(RecipeApp);

    expect(component.find('textarea')).to.exist;
  });
});