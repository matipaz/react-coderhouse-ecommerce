const image = require('../assets/mouseRedragonGriffin.jpg')
const ItemDetail = ({item}) => 
{
    console.log("image2", image)

    console.log("image2",`${item.image.src}` == image.src)

    const image2 = require(item.image.src)
    console.log("image2",image2)

    return    <div className="card">
         <img  src={require(`${item.image.src}`).default} alt="Card image cap"></img>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price}</p>
        </div>  
    </div>  } 



export default ItemDetail