import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.scss';

function Button({
    className,
    children,
    onClick,
    onBlur,
    disabled
}) {
    const appliedClasses = [
        classes.Button,
        classes[btnType]
    ];

    if(className) {
        appliedClasses.push(className);
    }

     return (
        <button
            className={appliedClasses.join(' ')}
            onClick={onClick}
            onBlur={onBlur}
            disabled={disabled}
        >
            {children}
        </button>
    )
};

Button.propTypes = {
    btnType: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    type: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => {},
    onBlur: () => {},
    type: "button"
};

export default Button;