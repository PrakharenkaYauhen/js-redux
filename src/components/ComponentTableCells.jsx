import React from 'react';

// ComponentTableCells Component

function ComponentTableCells({ content, onClick, addStyle }) {
    return (
        <td className={'todo__table__data todo__table__data_cells' + ' ' + addStyle}
        onClick={onClick}
        >
            {content}
        </td>
    );
}

export { ComponentTableCells };