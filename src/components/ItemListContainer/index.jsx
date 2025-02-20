import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../asynProducts";
import { useState, useEffect } from "react";
import React from "react";
import { ItemList } from "../ItemList";


export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asynFunc = categoryId ? getProductsByCategory : getProducts

        asynFunc(categoryId)
            .then((response) => {
                setProducts(response)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [categoryId])

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;