import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')

        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])


    const incHandler = () => {
        setValue(value + 1)
    }

    // const clearLocalStorageHandler = () => {
    //     localStorage.clear()
    //     setValue(0)
    // }
    //
    // const removeLocalStorageHandler = () => {
    //     localStorage.removeItem('counterValue')
    //     setValue(0)
    // }

    return (
        <div className="App">
            <h2>LocalStorage</h2>
            <h4>{value}</h4>
            <button onClick={incHandler}>Inc</button>
            {/*<button onClick={setToLocalStorageHandler}>setToLocalStorage</button>*/}
            {/*<button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>*/}
            {/*<button onClick={clearLocalStorageHandler}>clearLocalStorage</button>*/}
            {/*<button onClick={removeLocalStorageHandler}>removeLocalStorage</button>*/}
        </div>
    );
}

export default App;
