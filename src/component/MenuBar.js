import React from "react";
import '../App.css';
import SearchProduct from "./SearchProduct";

function MenuBar(){
    return(
        <div className="menu_bar">
            <SearchProduct />
        </div>
    );
}

export default MenuBar;