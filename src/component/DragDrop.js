import React, { useContext } from "react";
import FullCrate from "./FullCrate"
import cocaCola from '../logos/Coca-Cola_logo.png'
import '../App.css';
import CrateRack from "./CrateRack";
import { ProductContext } from "../Contexts/ProductContext";

  function DragDrop() {
    const [products, setProducts] = useContext(ProductContext);
    
    return (
    <div>
      <div className="split-25 left">
      {products.map((fullcrate) => {
          return <FullCrate  id={fullcrate.id} logo={fullcrate.logo} name={fullcrate.name} />
        } )}
      </div>
      <div className="split-75 right">
        <CrateRack />
      </div>
      </div>
      
    );
  }
  
  export default DragDrop;