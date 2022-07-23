import React from "react";
import './App.css';
import DragDrop from "./component/DragDrop";
import { ProductProvider } from "./Contexts/ProductContext";



function App(){

  return(
    <ProductProvider>
      <div>
        < DragDrop />
      </div>
    </ProductProvider>
  );

}

export default App;