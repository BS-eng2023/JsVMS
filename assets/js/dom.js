'use strict';

import elements from './elements.js';
import datahandling from './datahandling.js';

const dom = {
    create(
        content = false,
        type = 'div',
        parent = false,
        className = false
    ) {
        const el = document.createElement(type);
        if (content) el.innerHTML = content;
        if (className) el.className = className;
        if (parent) parent.append(el);
        
        return el;
    },
    mapping() {
        elements.form = document.querySelector('form');
        elements.preview = document.querySelector('#preview');
    },
    appendEventListeners() {
        elements.form.addEventListener('submit', datahandling.appendContent);
    }
}

export default dom;