import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../App';
import Navbar from './Navbar';
import CartItem from './CartItem';
import './Style/cart.css'
import { Link } from 'react-router-dom';


const Cart = () => {
    
    const [cart, setCart] = useContext(CartContext);
        let price = cart.map(allCart => allCart.price);
        if(!price.length){
            return price = [0]
        }
        const allPrice =  price.reduce((oldValue, currentValue) => parseInt(oldValue)  +  parseInt(currentValue))

    const hendleRemove = (id) =>{
        const index = cart.findIndex((allItem )=> allItem.id === id);
        console.log(index);
        const currentCart = [...cart]
        currentCart.splice(index, 1);
        setCart(currentCart);
    }

  
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3>Shooping Cart</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            { cart.length?
                              cart.map((item, index) => <CartItem key={index} remove={()=>hendleRemove(item.id)} addedItem={item} />):
                              <tr>
                                <td><h3>Cart item emapity</h3></td>
                              </tr>
                
                            }

                        </table>
                    </div>
                    <div className="col-md-4">
                        <h3>Checkout</h3>
                        <h4>TOTAL ${price.length?  allPrice: '00'}</h4>
                       <Link to="/odder"> <button className='btn btn-danger'>Check Out</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;