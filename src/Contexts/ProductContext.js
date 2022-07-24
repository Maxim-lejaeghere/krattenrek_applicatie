import React, { useState, createContext } from "react";
import cocaCola from '../logos/Coca-Cola_logo.png'
import fanta from '../logos/fanta-logo.png';
import bru from '../logos/BRU-logo.jpg'

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([
        {
          id: 1,
          logo: cocaCola,
          name: "Coca-Cola"
        },
        {
          id: 2,
          logo: fanta,
          name: "Fanta"
        },
        {
          id: 3,
          logo: bru,
          name: "bru"
        },
        {
          id: 4,
          logo: cocaCola,
          name: "Coca-Cola"
        },
        {
          id: 5,
          logo: fanta,
          name: "Fanta"
        },
        {
          id: 6,
          logo: bru,
          name: "bru"
        },
        {
          id: 7,
          logo: cocaCola,
          name: "Coca-Cola"
        },
        {
          id: 8,
          logo: fanta,
          name: "Fanta"
        },
        {
          id: 3,
          logo: bru,
          name: "bru"
        }
    
      ]);

      return(
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
      );
};