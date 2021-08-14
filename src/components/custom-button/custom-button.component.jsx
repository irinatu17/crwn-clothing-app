import React from 'react';
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogelSignIn, ...otherProps}) => {
    return (
        <button 
            className={`${isGoogelSignIn ? 'google-sign-in' : ''} custom-button`} 
            {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
