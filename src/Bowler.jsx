
import { useState } from "react"

export default function Bowler(){

    const [run, setRuns] = useState(0);
    const[four, setFour] = useState(0);
    const[six, setSix] = useState(0);


    const fourRuns =()=> {
        const updateFour = run + 4;
        setRuns(updateFour);
        const updateFour2 = four + 1;
        setFour(updateFour2)
    };


    const sixRuns =()=>{
        setRuns(run + 6);
        setSix(six + 1)
    }


    const bowlerBoxStyle = {
        border: "1px solid salmon",
        marginBottom :'15px',
        paddingBottom: '25px',
        padding: "10px",
        borderRadius: '15px'
    }


    return (
        <div style={bowlerBoxStyle}>

            {
                (run<50) || <p> Congratulations your score : 50</p>
            }

            <h2>Team : Afganisthan</h2>
            <h1>Score : {run} </h1>
            <p>Four : {four} , Six : {six} </p>

            <button onClick={fourRuns}>Four</button>

            <button onClick={sixRuns}>Six</button>

        </div>
    )
}