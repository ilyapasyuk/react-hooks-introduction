import React, {Component} from 'react';
import Modal from '../Modal'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowModal: false
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Hello world</h1>

                <button onClick={() => this.setState({isShowModal: true})}>show modal</button>


                {this.state.isShowModal && (<Modal onClose={() => this.setState({isShowModal: false})}>
                    {['', '', '', '', '', '', ''].map((i, idx) => (
                        <p key={idx}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>))}
                </Modal>)}
            </div>
        )
    }

}

export default App;