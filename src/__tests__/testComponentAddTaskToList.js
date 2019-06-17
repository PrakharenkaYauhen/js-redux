// testComponentAddTaskToList

import React from 'react';
import ComponentAddTaskToList from '../components/ComponentAddTaskToList';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tasksBlock = renderer
  .create(<ComponentAddTaskToList />)
  .toJSON();
  expect(tasksBlock).toMatchSnapshot();

  // expect(tasksBlock.onToggleModal).toBeDefined();

  // tasksBlock.onToggleModal();
  // tasksBlock = component.toJSON();
  // expect(tasksBlock).toMatchSnapshot();
});