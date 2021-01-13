import React from 'react';
import CarPreview from './CarPreview'
import Avtomobil from '../moduli/Avtomobil';

import {
  BrowserRouter as Router, Switch, Route, Redirect, Link,
  useParams
} from 'react-router-dom';
import DodajAvtomobil from './DodajAvtomobil';
import ShowCar from './ShowCar';

interface PrikazAvtovProps{

  avti: Avtomobil[]
  onNajemAvta: (avto: Avtomobil) => any;
 onProdajaAvta: (avto: Avtomobil) => any;
 onIzbrisiAvto: (avto: Avtomobil)=> any;
}


function PrikazAvtov(props: PrikazAvtovProps) {
  const [SezAvtov, setSezAvtov] = React.useState <Avtomobil[]>();

  

  const { id }: any = useParams();


  
  React.useEffect(() => {
    pridobiSeznamAvtov();
  }, )

  const pridobiSeznamAvtov: () => void = () => {
    setSezAvtov(props.avti);
  }
  

  const onNajemAvta =(avto: Avtomobil) => {
    props.onNajemAvta(avto)  
  }

  const onIzbrisAvta =(avto: Avtomobil) => {
    props.onIzbrisiAvto(avto)  
  }
  const onProdajaAvta =(avto: Avtomobil) => {
    props.onProdajaAvta(avto)  
  }


  
 

  return (
    <div>
      
      <ShowCar onNajemAvta={onNajemAvta} onIzbrisiAvto={onIzbrisAvta} onProdajaAvta={onProdajaAvta}  avto={props.avti[id]}/>

    
  </div>
  );
}

export default PrikazAvtov;



