'use strict';

import elements from './elements.js';
import dom from './dom.js';
import datahandling from './datahandling.js';

const render = {
    preview(contents) {
        elements.preview.innerHTML = '';

        for (let content of contents) {
            const container = dom.create(
                null,
                'div',
                elements.preview,
                'container'
            )

            dom.create(
                content.title,
                'h2',
                container,
            )

            // Button zum löschen
            const btnDelete = dom.create(
                'Delete',
                'button',
                container
            )

            btnDelete.addEventListener('click', () => {
                let index = contents.indexOf(content);
                contents.splice(index, 1);
                datahandling.saveContent(contents);
                render.preview(contents);
            })

        }
    }
}

export default render;