import './ItemCount.css';

import React, {useState} from 'react';

/*Estado usestate  hardcodeado*/
export const ItemCount = () => {
    const [count, setCount] = useState(1);  
    return (
        <div className='counter'>
            <button className='botonCarroAzul'>-</button>
            <span>{count}</span>
            <button className='botonCarroAzul'>+</button>
            <div>
                <button>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;