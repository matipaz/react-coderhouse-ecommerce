import { useState,useEffect,para } from "react";
import {useParams} from 'react-router-dom'
import Item   from '../Item/Item'
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading'
import {map,filter,isNil} from'lodash'
import {getProducts} from '../../helpers/client'

const ItemListContainer = () =>{
    let {categoryId} = useParams()

    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts().then((result) => {
            const products = isNil(categoryId) ? result: filter(result,(product)=> product.category.id == categoryId);
            setItems(products); 
        })}, [items])
    
    return(
        <>
            {items.length === 0 ? <SpinnerLoading/> : map(items,(item,index) => <Item item={item} key={index} />)}
        </> 
    
    )
}

export default ItemListContainer;