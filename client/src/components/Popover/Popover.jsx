import React from 'react';

import { Popover as AntPopover } from 'antd';
import 'antd/lib/popover/style/index.css';

function Popover({
    title,
    children,
    content,
    placement,
    trigger,
    className
}) {

    return (
        <AntPopover overlayClassName={className} placement={placement} title={title} content={content} trigger={trigger}>
            {children}
        </AntPopover>
    );
}

Popover.defaultProps = {
    content: () => null,
    trigger: 'click',
    title: ''
}

export default Popover;
