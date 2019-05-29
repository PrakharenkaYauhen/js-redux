// ComponentJuventus

import React from 'react';
import PropTypes from 'prop-types'

function ComponentJuventusModal({
    juventusStuffObject,
    juventusStuffIsLoaded,
    onClickStuff,
    juventusStuffModal,
}) {

    console.log('%c%s', 'color: blue', 'JuventusModal');

    let stuff;

    if (juventusStuffIsLoaded) {

        let positionsArray = ['Manager', 'Goalkeeper', 'Left Back', 'Defender', 'Centre Back', 'Right Back', 'Midfielder',
            'Defensive Midfielder', 'Centre Midfielder', 'Attacking Midfielder', 'Left Wing', 'Right Wing', 'Forward'];

        let comparePositions = (a, b) => {
            return positionsArray.indexOf(a[1]) > positionsArray.indexOf(b[1]) ? 1 : -1;
        }
        juventusStuffObject.sort(comparePositions);

        stuff = juventusStuffObject.map((item, i) =>
            <li key={i}>{`${item[0]} - ${item[1]} - ${item[2]} - ${item[3]}`}</li>
        );

    }

    return (
        juventusStuffModal && <div className='modal__juventus-stuff'>
            <div className='modal__juventus-stuff__stuff'><h3>Current stuff:</h3>
                <ul>{stuff}</ul>
            </div>
            <button className='modal__button_exit' onClick={onClickStuff}>x</button>
        </div>
    );

}

ComponentJuventusModal.propTypes = {
    juventusStuffObject: PropTypes.array,
    juventusStuffIsLoaded: PropTypes.bool,
    onClickStuff: PropTypes.func,
    juventusStuffModal: PropTypes.bool
}

export { ComponentJuventusModal };