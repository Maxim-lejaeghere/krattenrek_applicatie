import React from "react";
import cocaCola from '../logos/Coca-Cola_logo.png'
import '../App.css';

const FullCrateList =[
    {
      key: 1,
      logo: cocaCola,
      name: "Coca-Cola"
    },
    {
      key: 2,
      logo: cocaCola,
      name: "Fanta"
    }
  
  ]

function CrateRack(){
    return(
        <div className="rack" >
            <div className="shelve"></div>
            <div className="shelve"></div>
            <div className="shelve"></div>
            <div className="paws"></div>
        </div>
    );
}

export default CrateRack;