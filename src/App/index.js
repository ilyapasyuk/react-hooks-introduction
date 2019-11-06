import React, {useState, useRef} from 'react';

const App = () => {
    const [value, setValue] = useState('');
    const fieldRef = useRef(null);

    function fieldHandler() {
        setValue(fieldRef.current.value)
    }

    return (
        <div className="App">
            {value && <p>{value}</p>}
            <input type="text" ref={fieldRef}/>
            <button onClick={() => fieldHandler()}>Show value</button>
        </div>
    )
};

export default App;
