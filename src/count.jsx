import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount (newCount)
        // console.log(newCount)
    }

    const counterStyle = {
        border: '1px solid yellow',
        marginBottom: '10px',
        paddingBottom: "20px"
    };
    return <div style={counterStyle}>
        <h3>Count : {count} </h3>
        <button onClick={handleAdd}>Add</button>
    </div>
}