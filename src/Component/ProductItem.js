import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../App';
import './Style/Product.css';

const ProductItem = (props) => {
    const { img, price, name, id } = props.item;
    const [cart, setCart] = useContext(CartContext);

    const hendleAddProduct = (name, price, img, id) => {
        const currentCart = {
            name: name,
            price: price,
            img: img,
            id: id
        }
        const addItem = [...cart, currentCart]
        setCart(addItem)
    }
    
    
    return (
        <div className="items d-flex justify-content-center">
            <div>
                <img className='img-fluid' src={img} alt="" />
                <div className="d-flex justify-content-between">
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
                <button onClick={()=>hendleAddProduct(name, price, img, id)}>Add to Cart</button>
               
            </div>
        </div>
    );
};

export default ProductItem;