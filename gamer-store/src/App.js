import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  Header from './components/Header/Header'
import  ItemListContainer from './components/ItemListContainer/ItemListContainer'
import  ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <Router>

    <div className="App">
     <Header/>

     <div id="main">
          <Switch>
            <Route path="/product/:id">
              <ItemDetailContainer /> 
            </Route>
            <Route path="/category/:categoryId">
                <ItemListContainer /> 
            </Route>
            <Route exact path="/"> 
              <ItemListContainer/>
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
