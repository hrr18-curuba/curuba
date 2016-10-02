import {renderComponent, expect} from '../test_helper';
import Recipes from '../../src/components/Recipes';

describe ('Recipes', () =>{
  it('has a search input', () =>{

    const component = renderComponent(Recipes);

    expect(component.find('input')).to.exist;
  });
});