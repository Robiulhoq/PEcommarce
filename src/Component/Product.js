import React from 'react';
import data from '../FackData/ProductData.json';
import ProductItem from './ProductItem';
const Product = () => {
    return (
        <div className="container">
            <div className='row'>
            <div className="col d-flex flex-wrap">
            {
                data.map(item => <ProductItem item={item}/>)
            }
            </div>
        </div>
        </div>
        
    );
};

export default Product;