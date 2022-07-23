import React from "react";
import Shelve from "./Shelve";
import '../App.css';


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