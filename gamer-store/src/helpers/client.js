import products from '../components/data/products.json'
import {find} from 'lodash'

const getProducts = async () =>  {
    return  await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
        })
}

const getProductById = async (id)=> {
    return  await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(find(products,(item)=>item.id == id ));
        }, 1000);
        }).then((result) => result)
}


const getProductByCategory = async (category)=> {
    return  await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(find(products,(item)=>item.category == category ));
        }, 1000);
        }).then((result) => result)
    
}

const getProductBySubCategory = async (category, subcategory)=> {
    return  await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(find(products,(item)=>(item.category == category && item.subCategory == subcategory )));
        }, 1000);
        }).then((result) => result)
    
}


const getTopProducts = async ()=> {
    return  await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(find(products,(item)=> item.top ));
        }, 1000);
        }).then((result) => result)
    
}

export { getProducts,getProductById, getProductByCategory, getProductBySubCategory, getTopProducts}