import React from "react";
import '../App.css';
import { useDrag } from 'react-dnd/dist/hooks';

function Filling({id, name, logo}){
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "filling",
        item: { key: id },
       collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
       })
    }))

    return(
        <div style={{ border: isDragging ? "5px solid pink" : "0px" }} className="filling"  ref={drag}>
            <p>{name}</p>
            <img src={logo} alt="logo"></img>
        </div>
    );
}

export default Filling;