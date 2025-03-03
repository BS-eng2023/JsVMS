'use strict';

import datahandling from './datahandling.js';
import dom from './dom.js';
import render from './render.js';

const init = () => {
    dom.mapping();
    dom.appendEventListeners();

    let contents = datahandling.loadLocalStorage('contents');
    render.preview(contents);
}

init();
