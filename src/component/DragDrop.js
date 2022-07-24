import React from "react";
import '../App.css';
import CrateRack from "./CrateRack";
import MenuBar from "./MenuBar";

  function DragDrop() {
    return (
    <div>
      <div className="split-25 left">
        < MenuBar/>
      </div>
      <div className="split-75 right">
        <CrateRack />
      </div>
      </div>
      
    );
  }
  
  export default DragDrop;