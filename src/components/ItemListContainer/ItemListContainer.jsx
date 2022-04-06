import { useState, useEffect } from "react";
import { getProducts } from '../../asyncronock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])

    return (
        <div>
            <h1>{props.greeting}</h1>
            < ItemList products = {products}/>
        </div>

    );

}

export default ItemListContainer