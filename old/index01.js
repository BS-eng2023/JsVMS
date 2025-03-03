'use strict';

import elements from '../assets/js/elements.js';
import openFilter from '../assets/js/openFilter.js';

const domMapping = () => {
    elements.main = document.querySelector('main');
    elements.navFilter = document.querySelector('nav #filter');
}

const appendEventListeners = () => {
    elements.navFilter.addEventListener('click', openFilter);
}

const init = () => {
    domMapping();
    appendEventListeners();
}

init();