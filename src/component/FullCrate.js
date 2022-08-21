import React from "react";
import '../App.css';
import { useDrag } from 'react-dnd/dist/hooks';

function FullCrate({id, name, logo}){
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "crate",
        item: { key: id },
       collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
       })
    }))

    return(
        <div style={{ border: isDragging ? "5px solid pink" : "0px" }} className="crate"  ref={drag}>
            <p>{name}</p>
            <img src={logo} alt="logo"></img>
        </div>
    );
}

export default FullCrate;