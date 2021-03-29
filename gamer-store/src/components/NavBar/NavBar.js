import menu from '../data/menuNavBar.json'
import ItemNavBar from './ItemNavBar'
import {map} from 'lodash'

const NavBar = () =>            

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a className="navbar-brand" href="#">Game store</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
        <ul className="navbar-nav ml-auto">
        {
            map(menu,(item,index)=><ItemNavBar category={item} key={index}/>)
        }
        </ul>
    </nav>

export default NavBar
