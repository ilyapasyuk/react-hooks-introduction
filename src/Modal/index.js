import React from 'react';
import './style.css'

const Modal = ({onClose, children}) => (
    <div className="Modal">
        <button onClick={() => onClose()} className="Modal__close">close modal</button>

        <div className="Modal__content">
            {children}
        </div>
    </div>
);

export default Modal;