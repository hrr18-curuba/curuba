import {renderComponent, expect} from '../test_helper';
import Recipes from '../../src/components/recipes';

describe ('Recipes', () =>{
  let component;

  beforeEach(() => {
    component = renderComponent(Recipes);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('recipes');
  });

  it('has a search input', () =>{
    expect(component.find('input')).to.exist;
  });
});