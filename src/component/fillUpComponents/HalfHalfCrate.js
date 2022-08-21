import React from "react";
import '../../App.css';
import { useDrag } from 'react-dnd/dist/hooks';
import Filling from "../Filling";

function HalfHalfCrate({id, name, logo}){
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "halfHalfCrate",
        item: { key: id },
       collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
       })
    }))

    return(
        <div style={{ border: isDragging ? "5px solid red" : "0px", display:'flex' }} className="half_half_crate"  ref={drag}>
            <div className="half"></div>
            <div className="half"></div>
        </div>
    );
}

export default HalfHalfCrate;