import './App.css';
import MyCounter from "./components/MyCounter";
import Cart from "./components/Cart";
import MyGame from "./components/MyGame";

function App() {
    const counters = [
        {id: 1, initial: 6, min: -5, max: 10},
        {id: 2, initial: 5},
        {id: 3},
    ];

    const products = [
        {id: 0, name: "Constructor Lego", price: 300, initial: 1},
        {id: 1, name: "Train Station", price: 200, initial: 1},
        {id: 2, name: "Hot Wheels Track", price: 150, initial: 2},
    ];

    return (
        <div className="App">
            {counters.map((counter) => <MyCounter key={counter.id} initial={counter.initial} max={counter.max}
                                                  min={counter.min}/>)}
            <Cart products={products}/>
            <MyGame/>
        </div>
    );
}

export default App;
