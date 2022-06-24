import React from 'react';
const CartItem = (props) => {
    const { name, img, price, id}  = props.addedItem;
  
    return (
        
            <tbody>
                <tr>
                    <img style={{width: '50px', height: '50px'}} className='img-fluid' src={img} alt="" />
                    <td>{name}</td>
                    <td>{price}</td>
                    <button onClick={()=>props.remove(id)} className='btn btn-danger'>Remove</button>
                </tr>
            </tbody>
      
    );
};

export default CartItem;