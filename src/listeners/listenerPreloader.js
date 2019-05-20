// listenerPreloader

import { store } from './../index.js';
import imgUrl from './../free-loader-gif-3.gif';

let listenerPreloader = () => {
    const state = store.getState();
    const loadComplete = state.reducerWeather.loadComplete;
    const loadJuventusComplete = state.reducerJuventus.loadJuventusComplete;

    console.log('Preloader');

    if (loadComplete) return;

    let weather = document.querySelector('.weather__content');
    weather.innerHTML = '';
    let img = document.createElement('img');
    let p = document.createElement('p');
    img.classList.add('preloader');    
    img.setAttribute('src', imgUrl);
    p.classList.add('weather__paragraph');
    p.innerHTML = 'We are looking for an information';
    weather.appendChild(p);
    weather.appendChild(img);

    if (loadJuventusComplete) {
        return;
    } else {
        const juventus = document.querySelector('.juventus__content');
        juventus.innerHTML = '';
        let img = document.createElement('img');
        let p = document.createElement('p');
        img.classList.add('preloader');    
        img.setAttribute('src', imgUrl);
        p.classList.add('juventus__paragraph');
        p.innerHTML = 'We are looking for an information';
        juventus.appendChild(p);
        juventus.appendChild(img);
    }
}

export {
    listenerPreloader
}