import React, { useState } from "react";
import { useDrop } from "react-dnd";
import FullCrate from "./FullCrate"
import cocaCola from '../logos/Coca-Cola_logo.png'
import '../App.css';

const FullCrateList =[
  {
    id: 1,
    logo: cocaCola,
    name: "Coca-Cola"
  },
  {
    id: 2,
    logo: cocaCola,
    name: "Fanta"
  }

]

function CrateRack(){
    const [board, setBoard] = useState([]);
  
    const [{ isOver }, drop] = useDrop(() => ({
      accept: "crate",
      drop: (item) => addCrateToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    const addCrateToBoard = (id) => {
     const fullCrateList = FullCrateList.filter((crate) => id === crate.id);
     setBoard(() => []);
     setBoard((board) => [...board, fullCrateList[0]]);
    };
    return(
        <div className="rack" >
            <div className="shelve" ref={drop}>
            {board.map((fullcrate) => {
            return <FullCrate  id={fullcrate.id} logo={fullcrate.logo} name={fullcrate.name} />
            })}
            </div>
            <div className="shelve" ></div>
            <div className="shelve" ></div>
            <div className="paws"></div>
        </div>
    );
}

export default CrateRack;