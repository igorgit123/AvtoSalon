import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect, Link,
  useParams
} from 'react-router-dom';

function Navbar() {
  return (

 
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
    <Link className="navbar-brand" to="/seznamAvtov">Vsi avti</Link>
    </div>
    <ul className="nav navbar-nav">
    <li><Link to="/seznamNajetihAvtov">Najeti</Link></li>
     <li><Link to="/seznamProdanihAvtov">Prodani</Link></li>
      <li><Link to="/dodajAvto">Dodaj avto</Link></li>
      <li><Link to="/o-nas">O nas</Link></li>
    </ul>
  </div>
</nav>
  
     
  
  );
}

export default Navbar;



