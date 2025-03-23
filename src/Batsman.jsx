import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [four, setFour] = useState(0);
    const [six, setSix] = useState(0);

    const singleRuns = () =>{
        const updateRuns= runs+1;
        setRuns(updateRuns)
    }

    const doubleRuns =() =>{
        const updateRuns2 = runs + 2;
        setRuns(updateRuns2)
    }

    const fourRuns = () => {
        const updateRuns3 = runs + 4;
        setRuns(updateRuns3);
        
        const takeFour = four + 1;
        setFour(takeFour)
    }

    const sixRuns = () =>{
        const updateRuns4 = runs + 6;
        const takeSixes = six + 1;
        setSix(takeSixes)
        setRuns(updateRuns4)
    }

    const BatsmanStyle ={
        border: "1px solid blue",
        marginBottom :'15px',
        paddingBottom: '25px',
        padding: "10px",
        borderRadius: '15px',
    }
    return (
        <div style={BatsmanStyle}>
            
            {
                runs > 50 && <p>Your Score: 50</p>
            }
            {
                runs > 100 && <p>Your Score: 100</p>
            }

            <h1>Score : {runs} </h1>
            <h3>Player : Bangladeshi</h3>
            <p> Four : {four} , Six : {six}</p>
            <button onClick={singleRuns}>Single Run</button>
            <button onClick={doubleRuns}>Double Run</button>
            <button onClick={fourRuns}>Four</button>
            <button onClick={sixRuns}>Six</button>
        </div>
    )
}




// 5 use cases of useState()
// 1. State management
// 2. Conditional rendering
// 3. toggle flags(true, false)
// 4. Counter
// 5. Store API data in state