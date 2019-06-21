import React, {useEffect} from 'react';
import './style.css'

const Scroller = ({onClose, children}) => {

    useEffect(() => {
        document.title = 'Scroller';
        document.addEventListener('scroll', printScroll, false);

        return () => {
            document.removeEventListener('scroll', printScroll, false);
            document.title = 'Homepage'
        }
    });

    function printScroll() {
        console.log('scrolling')
    }

    return (
        <div className="Scroller">
            <button onClick={() => onClose()} className="Scroller__close">hide Scroller</button>

            <div className="Scroller__content">
                {children}
            </div>
        </div>
    )
};


export default Scroller;