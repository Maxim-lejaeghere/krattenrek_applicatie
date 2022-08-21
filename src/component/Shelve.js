import React, { useState, useContext } from "react";
import { useDrop } from "react-dnd";
import FullCrate from "./fillUpComponents/FullCrate"
import { ProductContext } from "../Contexts/ProductContext";
import '../App.css';
function Shelve() {

    const [products] = useContext(ProductContext);
    const [shelve, setShelve] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
      accept: ['fullCrate', 'halfHalfCrate','halfQuartCrate','quartQuartCrate'],
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
        <div className="shelve flex_alligment" ref={drop}>
             {shelve.map((fullcrate) => {
            return <FullCrate  key={fullcrate.id}/>
        } )}
        </div>
    );
}

export default Shelve;