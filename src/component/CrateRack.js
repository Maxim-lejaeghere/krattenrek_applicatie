import React from "react";
import Shelve from "./Shelve";
import '../App.css';

function CrateRack(){
    return(
        <div className="rack" >
            <Shelve/>
            <Shelve/>
            <Shelve/>
            <div className="paws"></div>
        </div>
    );
}

export default CrateRack;