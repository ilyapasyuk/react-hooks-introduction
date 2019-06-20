import React, {Component} from 'react';
import './style.css'

class Modal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Modal">
                <button onClick={() => this.props.onClose()} className="Modal__close">close modal</button>

                <div className="Modal__content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Modal;