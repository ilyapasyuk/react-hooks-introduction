import React, {Component} from 'react';
import './style.css'

class Scroller extends Component {
    constructor(props) {
        super(props);
        this.printScroll = this.printScroll.bind(this);
    }

    printScroll() {
        console.log('scrolling')
    }

    componentDidMount() {
        document.addEventListener('scroll', this.printScroll, false);
        document.title = 'Scroller'
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.printScroll, false);
        document.title = 'Homepage'
    }

    render() {
        return (
            <div className="Scroller">
                <button onClick={() => this.props.onClose()} className="Scroller__close">hide Scroller</button>

                <div className="Scroller__content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Scroller;