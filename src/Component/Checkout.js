import React from 'react';

const Checkout = (props) => {
    const {price} = props.item;
    return (
        <div>
            <h4>this is Checkout{price}</h4>
        </div>
    );
};

export default Checkout;