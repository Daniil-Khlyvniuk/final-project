import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as productsActions from "../../store/actions/products";
import CardInCatalog from "../CardInCatalog/CardInCatalog";

const Catalog = () => {
    const products = useSelector(state => state.products.data)
    const dispatch = useDispatch()

    useEffect(() => {
            // axios.get('http://localhost:5000/products')
            // axios.get('/products.json')
            // 	.then(products => console.log(products.data))
            dispatch(productsActions.getAllProducts())
        }
        , [])

    return (
        <div style={{display:'flex', flexWrap: 'wrap', maxWidth: '880px', gap: '20px', margin: '0 auto'}}>
            {products.map((item, key) => <CardInCatalog key={key} price={item.price} title={item.title} image={item.img}/>)}
        </div>
    );
};

export default Catalog;