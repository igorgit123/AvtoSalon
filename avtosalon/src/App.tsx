import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Redirect, Link,
  useParams
} from 'react-router-dom';
import DodajAvtomobil from './components/DodajAvtomobil';
import SeznamAvtov from './components/SeznamAvtov';
import ONas from './components/ONas';
import Navbar from './components/Navbar';
import Avtomobil from './moduli/Avtomobil';
import avto1 from './moduli/Avto1';
import avto2 from './moduli/Avto2';
import PrikazAvtov from './components/PrikazAvtov';
import DodajKupca from './components/DodajKupca';


let seznamAvtov: Avtomobil[] = [];
  seznamAvtov.push(avto1)
  seznamAvtov.push(avto2)
  
let najetiAvti: Avtomobil[] = [];
  
let prodaniAvti: Avtomobil[] = [];
let avtoZKupcem: Avtomobil = avto1;


function App() {

  
 

  const [SezAvtov, setSezAvtov] = React.useState<Avtomobil[]>(seznamAvtov);
  const [SezNajetihAvtov, setSezNajetihAvtov] = React.useState<Avtomobil[]>(najetiAvti);
  const [SezProdanihAvtov, setSezProdanihAvtov] = React.useState<Avtomobil[]>(prodaniAvti);

  
  React.useEffect(() => {
    pridobiSeznamAvtov();
  },)

  const pridobiSeznamAvtov: () => void = () => {
    setSezAvtov(seznamAvtov);
    setSezNajetihAvtov(najetiAvti)
    setSezProdanihAvtov(prodaniAvti)
  }


  const onAdd = (avto: Avtomobil) => {
    let noviSeznam: Avtomobil[] = seznamAvtov?.slice()
    
    noviSeznam.push(avto)
    setSezAvtov(noviSeznam)

    seznamAvtov.push(avto)
    
    

  }

  const onNajemAvta = (avto: Avtomobil) => {
    let noviSeznamNajetih: Avtomobil[] = najetiAvti?.slice()
    
    avto.najet = true;
    noviSeznamNajetih.push(avto)
    setSezNajetihAvtov(noviSeznamNajetih)

    najetiAvti.push(avto)
    
    for (var i = 0; i < seznamAvtov.length; i++) {
      if (seznamAvtov[i] === avto) {
        
        SezAvtov.splice(i, 1)
        }
    }
  }


  const onIzbrisiAvto = (avto: Avtomobil) => {
    
    
    for (var i = 0; i < seznamAvtov.length; i++) {
      if (seznamAvtov[i] === avto) {
        
        SezAvtov.splice(i, 1)
        }
    }
    for (var i = 0; i < prodaniAvti.length; i++) {
      if (prodaniAvti[i] === avto) {
        
        SezProdanihAvtov.splice(i, 1)
        }
    }
    for (var i = 0; i < najetiAvti.length; i++) {
      if (najetiAvti[i] === avto) {
       
        SezNajetihAvtov.splice(i, 1)
        }
    }




  }
  
  const onProdajaAvta = (avto: Avtomobil) => {
    let noviSeznamProdanih: Avtomobil[] = prodaniAvti?.slice()
    
    
    avto.prodan = true;
    noviSeznamProdanih.push(avto)
    setSezProdanihAvtov(noviSeznamProdanih)

    prodaniAvti.push(avto)
    avtoZKupcem = new Avtomobil(
      avto.slikaUrl,
      avto.cena,
      avto.znamka,
      avto.model,
      avto.letnik,
      avto.vin,
      avto.barva,
      avto.oprema,
      avto.opis,
      avto.najet,
      avto.prodan
    );
    console.log(avtoZKupcem.znamka)
    for (var i = 0; i < seznamAvtov.length; i++) {
      if (seznamAvtov[i] === avto) {
        
        SezAvtov.splice(i, 1)
        }
    }
  }

  const dodajaKupca = (avto: Avtomobil) => {
    let zacasniSeznamProdanih: Avtomobil[] = SezProdanihAvtov?.slice()
    
    
    
    
    for (var i = 0; i < zacasniSeznamProdanih.length; i++) {
      if (zacasniSeznamProdanih[i].model === avto.model)
        zacasniSeznamProdanih[i].kupec=avto.kupec


    }

    setSezProdanihAvtov(zacasniSeznamProdanih)
    
    
  }









  return (
    <Router>
      <Navbar/>
      <div className="App">

        <Switch>

          <Route path="/avto/:id">
            <PrikazAvtov onNajemAvta={onNajemAvta} onIzbrisiAvto={onIzbrisiAvto} onProdajaAvta={onProdajaAvta} avti={SezAvtov}></PrikazAvtov>         
          </Route>

          <Route path="/sezNajetihAvtov/:id">
          <PrikazAvtov onNajemAvta={onNajemAvta} onIzbrisiAvto={onIzbrisiAvto} onProdajaAvta={onProdajaAvta} avti={SezNajetihAvtov}></PrikazAvtov>         
          </Route>
          

          <Route path="/sezProdanihAvtov/:id">
          <PrikazAvtov onNajemAvta={onNajemAvta} onIzbrisiAvto={onIzbrisiAvto} onProdajaAvta={onProdajaAvta}  avti={SezProdanihAvtov}></PrikazAvtov>         
          </Route>

          <Route path="/dodajKupca">
               <DodajKupca onAdd={dodajaKupca} avto={avtoZKupcem}></DodajKupca>
          </Route>
          


          <Route exact path="/">
            <Redirect to="/seznamAvtov" />
          </Route>
         

          <Route path="/dodajAvto">
          <DodajAvtomobil onAdd={onAdd}/>
          </Route>

          <Route path="/seznamAvtov">
          <SeznamAvtov avti={SezAvtov}></SeznamAvtov>
          </Route>

          <Route path="/seznamNajetihAvtov">
          <SeznamAvtov avti={SezNajetihAvtov}></SeznamAvtov>
          </Route>

          <Route path="/seznamProdanihAvtov">
          <SeznamAvtov avti={SezProdanihAvtov}></SeznamAvtov>
          </Route>

          <Route path="/o-nas">
          <ONas/>
          </Route>


          <Route path="/404">
            <h2>404 - Not found</h2>
          </Route>
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
