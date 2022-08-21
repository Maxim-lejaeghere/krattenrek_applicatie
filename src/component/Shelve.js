import React, { useState, useContext } from "react";
import { useDrop } from "react-dnd";
import FullCrate from "./FullCrate"
import { ProductContext } from "../Contexts/ProductContext";
import '../App.css';
function Shelve() {

    const [products] = useContext(ProductContext);
    const [shelve, setShelve] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
      accept: "crate",
      drop: (item) => addCrateToBoard(item.key),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    const addCrateToBoard = (id) => {
     const shelveList = products.filter((crate) => id === crate.id);
     setShelve([]);
     setShelve((shelve) => [...shelve, shelveList[0]]);
    };

    return (
        <div className="shelve" ref={drop}>
             {shelve.map((fullcrate) => {
            return <FullCrate  key={fullcrate.id} logo={fullcrate.logo} name={fullcrate.name}/>
        } )}
        </div>
    );
}

export default Shelve;