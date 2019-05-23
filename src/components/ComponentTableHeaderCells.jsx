import React from 'react';

// ComponentTableHeaderCells

function ComponentTableHeaderCells({ content, onClick }) {
    return (
        <th
            onClick={onClick}
            className='todo__table__data todo__table__data_header' >{content}
        </th>
    );
}

export { ComponentTableHeaderCells };