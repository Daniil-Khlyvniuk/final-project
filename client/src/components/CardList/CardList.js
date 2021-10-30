import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import * as productsActions from '../../store/actions/products'
import Card from "../Card/Card";

const CardList = () => {

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
        <div>
            <p style={{textAlign: 'center'}}>NEW IN</p>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', maxWidth: '1180px', margin: '0 auto'}}>
                {products?.map((item, key) => <Card key={key} image={item.img} title={item.title} price={item.price}/>)}
            </div>

        </div>
    )
}

export default CardList