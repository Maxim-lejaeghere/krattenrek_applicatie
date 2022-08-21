import React from "react";
import '../App.css';
import FullCrate from "./fillUpComponents/FullCrate";
import HalfHalfCrate from "./fillUpComponents/HalfHalfCrate";
import HalfQuartCrate from "./fillUpComponents/HalfQuartCrate";
import QuartQuartCrate from "./fillUpComponents/QuartQuartCrate";
import SearchProduct from "./SearchProduct";

function MenuBar(){
    return(
        <div className="menu_bar">
           <div className="flex_alligment" style={{minHeight: '100vh'}}>
            <div style={{marginBottom:'70px'}} className="blocks"><SearchProduct /></div>
            <div className="blocks"><FullCrate /></div>
            <div className="blocks"><HalfHalfCrate/></div>
            <div className="blocks"><HalfQuartCrate /></div>
            <div className="blocks"><QuartQuartCrate /></div>
            
           </div>
        </div>
    );
}

export default MenuBar;