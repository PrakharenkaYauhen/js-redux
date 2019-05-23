import React from 'react';

// ComponentTableCells Component

function ComponentTableCells({ content, onClick, onDoubleClick, addStyle }) {
    return (
        <td className={'todo__table__data todo__table__data_cells ' + addStyle}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        >
            {content}
        </td>
    );
}

export { ComponentTableCells };