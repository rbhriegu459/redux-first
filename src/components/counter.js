import { useSelector } from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state.counter);

    const toggleCOunterHandler = () => {
        counter++;
    };

    return(
        <main>
            <h1>Redux Counter</h1>
            <div> {counter} </div>
            <div>
                <button>Increment</button>
                <button>Decrement</button>
            </div>
            <button onClick={toggleCOunterHandler}>Toggle counter</button>
        </main>
    )
}

export default Counter;