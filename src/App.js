import { useState } from "react";
import "./App.css";

export default function App(){
    const [count, setCount] = useState(0);
    return (
        <div className="app">
            <h1>Hello</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Clicked {count} times</button>
        </div>
    )
}