import React,{ MouseEventHandler }  from 'react';
import classNames from "classnames";

interface buttonType {
    className: string
    children: React.ReactChildren | React.ReactNode
    outline?: string
    onClick?: ()=> void
}

const Button: React.FC<buttonType> = ({className, children, outline, onClick }) => {
    return (
        <button onClick={onClick} className={classNames('button', className,{
            'button--outline':outline,
        })}>
            {children}
        </button>
    );
};

export default Button;