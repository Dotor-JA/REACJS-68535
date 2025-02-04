import ItemCount from "../ItemCount";
import React from "react";
import Title from "../Title";


export const ItemListContainer = () => {
    return (
        <>
        <Title greeting='Bienvenidos a Dotor 3D' />
        <ItemCount />
        </>
    );
}

export default ItemListContainer;