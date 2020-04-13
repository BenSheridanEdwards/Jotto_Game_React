import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props={}) => {
  return shallow(<congrats {...props} />)
}

it('renders successfully', () =>{

});

it('renders no text when `success` prop is false', () => {
 
});

it('renders non-empty congrats message when `success` is true', () => {

});