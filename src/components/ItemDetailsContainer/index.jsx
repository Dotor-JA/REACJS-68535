import { useEffect, useState } from "react";
import { getProductsById } from "../../asynProducts";
import { ItemDetails } from "../ItemDetails/ItemDetails";
import { useParams } from "react-router-dom";
import './ItemDetailsContainer.css';

export const ItemDetailsContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams();

    useEffect(() => {

        getProductsById(itemId)
            .then((response) => {
                setProduct(response)
            })
            .catch((error) => {
                console.error(error);
            })

    }, [itemId])

    return (
        <div className="ItemDetailsContainer">

            <ItemDetails  {...product} />

        </div>
    )
}