import React from "react";
import '../../App.css';
import { useDrag } from 'react-dnd/dist/hooks';
import Filling from "../Filling";

function QuartQuartCrate({id}){
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "quartQuartCrate",
        item: { key: id },
       collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
       })
    }))

    return(
        <div style={{ border: isDragging ? "5px solid red" : "0px", display:'flex' }} className="half_half_crate"  ref={drag}>
            <div className="half_for_quart">
                <div className="quart"></div>
                <div className="quart"></div>
            </div>
            <div className="half_for_quart">
                <div className="quart"></div>
                <div className="quart"></div>
            </div>
        </div>
    );
}

export default QuartQuartCrate;