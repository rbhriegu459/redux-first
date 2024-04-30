import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({type : 'increment'})
    };

    const decrementHandler = () => {
        dispatch({type : 'decrement'})
    };
    
    const toggleCOunterHandler = () => {
    };

    return(
        <main>
            <h1>Redux Counter</h1>
            <div> {counter} </div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCOunterHandler}>Toggle counter</button>
        </main>
    )
}

export default Counter;