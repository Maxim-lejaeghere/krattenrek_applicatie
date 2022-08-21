import React, { useState,useContext} from "react";
import '../../App.css';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';
import Filling from "../Filling";
import { ProductContext } from "../../Contexts/ProductContext";

function FullCrate({id}){
    const [filling, setFilling] = useState([]);
    const [products] = useContext(ProductContext);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "fullCrate",
        item: { key: id },
       collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
       })
    }))

    const [{ isOver }, drop] = useDrop(() => ({
      accept: 'filling',
      drop: (item) => addFillingToCrate(item.key),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));

    const addFillingToCrate = (id) => {
        const shelveList = products.filter((crate) => id === crate.id);
        setFilling([]);
        setFilling((filling) => [...filling, shelveList[0]]);
        console.log(shelveList);
       };

    return(
        <div className="full" ref={drop}>
             {filling.map((fullcrate) => {
            return <Filling  key={fullcrate.id} logo={fullcrate.logo} name={fullcrate.name}/>
        } )}
        </div>
    );
}

export default FullCrate;