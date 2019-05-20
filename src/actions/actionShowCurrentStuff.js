// actionShowCurrentStuff

import { store } from './../index.js';

let parse = juventusStuffObject => {
    const juventusStuffModal = document.querySelector('.modal__juventus-stuff');
    const juventusStuffModalCover = document.querySelector('.modal__cover');
    const juventusStuffModalExit = document.querySelectorAll('.modal__button_exit')[1];
    const juventusStuffModalContent = document.querySelector('.modal__juventus-stuff__stuff');

    juventusStuffModal.classList.toggle('modal__juventus-stuff_visible');
    juventusStuffModalCover.classList.toggle('modal__cover_visible');

    let stuff;

    let positionsArray = ['Goalkeeper', 'Left Back', 'Defender', 'Centre Back', 'Right Back', 'Defensive Midfielder', 'Centre Midfielder', 'Left Wing', 'Right Wing', 'Forward'];

    let comparePositions = (a, b) => {
        if (positionsArray.indexOf(a[1]) > positionsArray.indexOf(b[1])) return 1;
        if (positionsArray.indexOf(a[1]) < positionsArray.indexOf(b[1])) return -1;
    }
    juventusStuffObject.sort(comparePositions);

    stuff = `<h3>Current stuff:</h3><ul>`;
    for (let i = 0; i < juventusStuffObject.length; i++) {
        stuff += `<li>${juventusStuffObject[i][0]} - ${juventusStuffObject[i][1]} - ${juventusStuffObject[i][2]} - ${juventusStuffObject[i][3]}</li>`;
    }

    juventusStuffModalContent.innerHTML = stuff;

    let juventusStuffModalHide = () => {
        juventusStuffModal.classList.toggle('modal__juventus-stuff_visible');
        juventusStuffModalCover.classList.toggle('modal__cover_visible');
        juventusStuffModalExit.removeEventListener('click', juventusStuffModalHide);
    }

    juventusStuffModalExit.addEventListener('click', juventusStuffModalHide);
}

let actionShowCurrentStuff = () => {
    const state = store.getState();
    const juventusStuff = state.reducerJuventusStuff.juventusStuff;
    const loadJuventusStuffComplete = state.reducerJuventusStuff.loadJuventusStuffComplete;

    if (loadJuventusStuffComplete) {
        parse(juventusStuff);
    }
}

export {
    actionShowCurrentStuff
}