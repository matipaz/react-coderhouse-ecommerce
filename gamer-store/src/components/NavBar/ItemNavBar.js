import {NavLink} from 'react-router-dom'

const ItemNavBar = ({category}) =>
   { console.log(category)
   return <li className="nav-item">
        <NavLink className="nav-link" to={`/category/${category.categoryId}`}>{category.category}</NavLink>
    </li>}

export default ItemNavBar