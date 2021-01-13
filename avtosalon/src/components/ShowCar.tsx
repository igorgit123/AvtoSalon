import React from 'react';
import Avtomobil from '../moduli/Avtomobil';
import {
  BrowserRouter as Router, Switch, Route, Redirect, Link,
  useParams, useHistory
} from 'react-router-dom';
import avto1 from '../moduli/Avto1';
import { stringify } from 'querystring';


interface ShowCarProps{


  avto: Avtomobil
  onNajemAvta: (avto: Avtomobil)=> any;
  onProdajaAvta: (avto: Avtomobil) => any;
  onIzbrisiAvto: (avto: Avtomobil)=> any;

}


function ShowCar(props: ShowCarProps) {
  
  const history = useHistory();

  const handleNajem = (event: React.MouseEvent<HTMLButtonElement>) => {
    history.push('/seznamNajetihAvtov')
    event.preventDefault()
    props.onNajemAvta(props.avto)  
  }
 
  const handleProdajo = (event: React.MouseEvent<HTMLButtonElement>) => {
    history.push('/dodajKupca')
    event.preventDefault()
    props.onProdajaAvta(props.avto)  
  }

  const handleIzbris = (event: React.MouseEvent<HTMLButtonElement>) => {
    history.push('/seznamAvtov')
    event.preventDefault()
    props.onIzbrisiAvto(props.avto)  
  }

  let gumbi;
  let kupec;

  if (props.avto.kupec?.ime != undefined) {
    kupec = <div>
      <h3>Podatki o kupcu</h3>
      <table className="table table-hover">
    
    <tbody>
      <tr>
        <td>Ime: </td>
          <td>{props.avto.kupec?.ime}</td>
       
      </tr>
      <tr>
        <td>Priimek: </td>
          <td>{props.avto.kupec?.priimek}</td>
       
      </tr>
      <tr>
        <td>Naslov: </td>
          <td>{props.avto.kupec?.naslov}</td>
       
          </tr>
          <tr>
        <td>Hišna številka: </td>
          <td>{props.avto.kupec?.hisnaSt}</td>
       
          </tr>
          <tr>
        <td>Pošta: </td>
          <td>{props.avto.kupec?.posta}</td>
       
          </tr>
          <tr>
        <td>Kraj: </td>
          <td>{props.avto.kupec?.kraj}</td>
       
      </tr>
    </tbody>
  </table>
      
      </div>
      
    }

  
  if (props.avto.najet === true  ) {
    gumbi = <button className="btn btn-info" onClick={handleIzbris}>Izbrisi avto</button>


  } else if (props.avto.prodan === true) {
    
    gumbi =<div>
      <button className="btn btn-info" onClick={handleIzbris}>Izbrisi avto</button>
    </div>
      

  } else {
    gumbi = <div>
    <button className="btn btn-info"  onClick={handleNajem}>Najem avta</button> 
    
    <button className="btn btn-info"  onClick={handleProdajo}>Prodaj avto</button> 
    
    <button className="btn btn-info"  onClick={handleIzbris}>Izbrisi avto</button>
</div>

  }
 
 

  return (
    <div>
      <p><img src={props.avto.slikaUrl} /></p>


      <h2>{"Cena: "+ props.avto.cena+ " €"}</h2>

      <table className="table table-hover">
    
     
    <tbody>
      <tr>
        <td>Znamka:</td>
        <td>{props.avto.znamka}</td>
       
      </tr>
      <tr>
        <td>Model:</td>
        <td>{props.avto.model}</td>
       
      </tr>
      <tr>
        <td>Letnik</td>
        <td>{props.avto.letnik}</td>
       
          </tr>
          <tr>
        <td>Barva:</td>
        <td>{props.avto.barva}</td>
       
          </tr>
          <tr>
        <td>Opis:</td>
        <td>{props.avto.opis}</td>
       
          </tr>
          <tr>
        <td>Vun number:</td>
        <td>{props.avto.vin}</td>
       
          </tr>
          <tr>
        <td>Gorivo:</td>
        <td>{props.avto.oprema?.gorivo}</td>
       
          </tr>
          <tr>
        <td>Menjalnik:</td>
        <td>{props.avto.oprema?.menjalnik}</td>
       
          </tr>
          <tr>
        <td>Poraba:</td>
            <td>{props.avto.oprema?.poraba+ "  litrov / 100 km"}</td>
       
          </tr>
          <tr>
        <td>Klima:</td>
        <td>{props.avto.oprema?.klima}</td>
       
          </tr>
          <tr>
        <td>Žarometi:</td>
        <td>{props.avto.oprema?.zarometi}</td>
       
          </tr>
          <tr>
        <td>Premik oken:</td>
        <td>{props.avto.oprema?.premikOkna}</td>
       
          </tr>
          <tr>
        <td>Premik sedežev:</td>
        <td>{props.avto.oprema?.premikSedezev}</td>
       
      </tr>
    </tbody>
  </table>

      

        
      <p>{kupec}</p>
      {gumbi}
      
      
    
  </div>
  );
}

export default ShowCar;



