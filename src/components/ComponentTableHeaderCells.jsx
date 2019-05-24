// ComponentTableHeaderCells

import React from 'react';
import PropTypes from 'prop-types';

function ComponentTableHeaderCells({ content, onClick }) {
    return (
        <th
            onClick={onClick}
            className='todo__table__data todo__table__data_header' >{content}
        </th>
    );
}

export { ComponentTableHeaderCells };

ComponentTableHeaderCells.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onClick: PropTypes.func,
}