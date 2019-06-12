// ComponentTableHeaderCells

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icons/Icon';
import { ICONS } from '../Icons/ConstantsIcons';

function ComponentTableHeaderCells({ content, icon, onClick }) {

  return (
    <th className="todo__table__data todo__table__data_header">
      <button
        type="button"
        tabIndex="1"
        className="icon"
        content={content}
        onClick={onClick}
      >
        <Icon icon={ICONS[icon]} size={20} />
      </button>
    </th>
  );
}

ComponentTableHeaderCells.defaultProps = {
  content: null,
};

ComponentTableHeaderCells.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onClick: PropTypes.func.isRequired,
};

export default ComponentTableHeaderCells;
