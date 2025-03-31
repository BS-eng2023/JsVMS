'use strict';

import dom from '../dom.js';

const inpFile = ({
    parent = null,
    legend = '',
    name = '',
    value = '',
    imagesOnly = false,
    multiple = true,
} = {}) => {

    const container = dom.create({
        parent,
        cssClassName: 'container containerInput',
    })

    dom.create({
        type: 'label',
        parent: container,
        content: legend,
        cssClassName: 'legend',
        attr: {
            for: legend
        }
    })

    const elInput = dom.create({
        value,
        parent: container,
        id: legend,
        name,
        type: 'input',
        attr: {
            type: 'file'
        },
        listeners: {
            change(evt) {
                // Previews darstellen
                contPreviews.innerHTML = '';

                let files = [...evt.target.files];

                files.forEach(file => {

                    const myReader = new FileReader();

                    myReader.addEventListener('load', evt => {
                        dom.create({
                            type: 'img',
                            parent: contPreviews,
                            src: evt.target.result,
                        })
                    })

                    myReader.readAsDataURL(file);

                })
            }
        }
    })
    if (imagesOnly) {
        elInput.accept = "image/*";
    }
    if (multiple) {
        elInput.multiple = true;
    }

    const contPreviews = dom.create({
        parent,
        cssClassName: 'contPreviews',
    })

}

export default inpFile;