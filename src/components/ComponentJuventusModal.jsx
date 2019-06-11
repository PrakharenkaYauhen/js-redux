// ComponentJuventus

import React from 'react';
import PropTypes from 'prop-types';

function ComponentJuventusModal({
  juventusStuffObject,
  juventusStuffIsLoaded,
  onClickStuff,
  juventusStuffModal,
}) {
  console.log('%c%s', 'color: blue', 'JuventusModal');

  let stuff;

  if (juventusStuffIsLoaded) {
    const positionsArray = ['Manager', 'Goalkeeper', 'Left Back', 'Defender', 'Centre Back', 'Right Back', 'Midfielder',
      'Defensive Midfielder', 'Centre Midfielder', 'Attacking Midfielder', 'Left Wing', 'Right Wing', 'Forward'];

    const comparePositions = (a, b) => (
      positionsArray.indexOf(a[1]) > positionsArray.indexOf(b[1])
        ? 1
        : -1
    );
    juventusStuffObject.sort(comparePositions);

    stuff = juventusStuffObject.map(item => <li key={item[0]}>{`${item[0]} - ${item[1]} - ${item[2]} - ${item[3]}`}</li>);
  }

  let exitButton = React.createRef();

  function handleClick(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
      exitButton.current.focus();
    }
  }

  return (
    juventusStuffModal && (
      <div className="modal__juventus-stuff">
        <div className="modal__juventus-stuff__stuff">
          <h3>Current stuff:</h3>
          <ul>{stuff}</ul>
        </div>
        <button
          type="button"
          className="modal__button_exit"
          ref={exitButton}
          onClick={onClickStuff}
          onKeyDown={e => handleClick(e)}
        >
          {`x`}
        </button>
      </div>
    )
  );
}

ComponentJuventusModal.defaultProps = {
  juventusStuffObject: [],
};

ComponentJuventusModal.propTypes = {
  juventusStuffObject: PropTypes.instanceOf(Array),
  juventusStuffIsLoaded: PropTypes.bool.isRequired,
  onClickStuff: PropTypes.func.isRequired,
  juventusStuffModal: PropTypes.bool.isRequired,
};

export default ComponentJuventusModal;
