import React from 'react';

export const CartWidget = () => {
    return (
        <>
            <div className="relative inline-block">
                <i className="bi bi-badge-3d-fill"></i>
                <i className="bi bi-cart-check ">1</i>
            </div>
        </>
    );
}

export default CartWidget;