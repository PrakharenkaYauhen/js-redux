// ComponentOneTaskInList

import React from 'react';
import PropTypes from 'prop-types';
import { ContainerActionTaskButton } from '../containers/ContainerActionTaskButton';
import { ICONS } from '../containers/Icons/ConstantsIcons';

function ComponentOneTaskInList(props) {
  const { task } = props;
  return (
    <li className="todo__tasks__item">
      <span>{task}</span>
      <ContainerActionTaskButton icon={ICONS.CROSS} size={11} />
      <ContainerActionTaskButton icon={ICONS.CHECKMARK} size={11} />
      <ContainerActionTaskButton icon={ICONS.PENCIL} size={11} />
    </li>
  );
}

ComponentOneTaskInList.propTypes = {
  task: PropTypes.string.isRequired,
};

export default ComponentOneTaskInList;
