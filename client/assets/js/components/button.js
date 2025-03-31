'use strict';

import dom from '../dom.js';

const button = ({
    parent = null,
    legend = '',
    isEncapsuled = false,
}) => {
    if (isEncapsuled) {
        parent = dom.create({
            parent,
            cssClassName: 'containerButton'
        })
    }

    const elButton = dom.create({
        type: 'button',
        content: legend,
        cssClassName: 'btnSend animate',
        parent
    })

    return elButton;

}
export default button;