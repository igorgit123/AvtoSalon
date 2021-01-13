import React from 'react';
import Navbar from './Navbar'
import {
  BrowserRouter as Router, Switch, Route, Redirect, Link,
  useParams
} from 'react-router-dom';

function ONas() {
  return (
    <div >
      <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i_Mj8oTh0Erk/v0/-1x-1.jpg" />
      <h1>O nas</h1>
      <p>Mi smo IROKS avtosalon. Pri nas lahko najdete katerikoli avto. Potrebujete trackday igračko? Imamo Porsche-a GT3RS za vas!</p>
      <p>Ste lastnik smučišča in je vaš ratrak v okvari? IROKS avtosalon je prava rešitev za vas, saj vam lahko ponudimo Mercedesa AMG 6x6!</p>
  </div>
  );
}

export default ONas;