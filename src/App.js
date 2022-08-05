import {useSelector, useDispatch} from 'react-redux'
import {inc, dec} from './actions/'
function App() {
    const counter = useSelector(state => state.increment)
    const dispatch = useDispatch()
    return (

        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec()) }>-</button>
            <button onClick={() => dispatch(inc()) }>+</button>
        </div>
    );
}

export default App;
