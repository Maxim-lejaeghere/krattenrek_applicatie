import React, { useState,useContext, useEffect } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import Select from 'react-select';
import Filling from "./Filling";



function SearchProduct(props) {
    
    const [products] = useContext(ProductContext);
    let product = products[0];
    const [options, setOptions] = useState([]);
    const defaultValue = {label: product.name, value: product.id};
    const [selectedCrate, setSelectedCrate] = useState(products[0]);

    


    
    useEffect(() => {
            setOptions([]);
            products.forEach(product => {
                setOptions((options) => [...options, { value: product.id, label: product.name }])});
    }, [products]);


    const onChange = (option) => {
        product = products.filter((crate) => option.value === crate.id)[0];
        setSelectedCrate(() => product);
    };


    return (
        <div>
            <Select defaultValue={defaultValue} options={options} onChange={onChange} />
            <div className="flex_alligment">
                <Filling key={selectedCrate.id} id={selectedCrate.id} name={selectedCrate.name} logo={selectedCrate.logo}/>
            </div>
        </div>
    );
}

export default SearchProduct;