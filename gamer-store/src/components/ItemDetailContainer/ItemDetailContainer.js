import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail    from '../ItemDetail/ItemDetail'
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading'
import {getProductById} from '../../helpers/client'
import {isEmpty} from 'lodash'

const ItemDetaiContainer = () =>{
    let {id} = useParams()

    const [item, setState] = useState({});
    useEffect(() =>{ getProductById(id)
        .then((resolve) => {setState(resolve); })}, [item])


    return  <>
                {isEmpty(item)? <SpinnerLoading/> : <ItemDetail item={item}/>}
            </>
            
}


export default ItemDetaiContainer
