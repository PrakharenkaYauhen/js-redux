// testComponentTaskSearch

import React from 'react';
import ComponentTaskSearch from '../components/ComponentTaskSearch';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const searchBlock = renderer
  .create(<ComponentTaskSearch/>)
  .toJSON();
  expect(searchBlock).toMatchSnapshot();  
});