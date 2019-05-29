// ComponentJuventusButtonStuff

import React from 'react';
import PropTypes from 'prop-types'

function ComponentJuventusButtonStuff({
    juventusStuffIsLoaded,
    onClickStuff,
}) {

    console.log('%c%s', 'color: blue', 'ComponentJuventusButtonStuff');

    return (
        <div className='juventus__stuff'>
            <button
                className='current-stuff'
                id='current-stuff'
                onClick={(e) => onClickStuff(juventusStuffIsLoaded, e)}>
                Current stuff
                    <span
                    className={juventusStuffIsLoaded ? 'current-stuff__available' : "current-stuff__not-available"}>
                    {juventusStuffIsLoaded ? ' (is available)' : " (isn't available)"}
                </span>
            </button>
        </div>
    );

}

ComponentJuventusButtonStuff.propTypes = {
    juventusStuffIsLoaded: PropTypes.bool,
    onClickStuff: PropTypes.func,
}

export { ComponentJuventusButtonStuff };