import React from "react";
import FullCrate from "./FullCrate"
import cocaCola from '../logos/Coca-Cola_logo.png'
import '../App.css';
import CrateRack from "./CrateRack";

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

  function DragDrop() {
    return (
     

    <div>
      <div className="split-25 left">
        {FullCrateList.map((fullcrate) => {
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