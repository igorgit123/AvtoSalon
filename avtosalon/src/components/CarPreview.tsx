import React from 'react';
import Avtomobil from '../moduli/Avtomobil';
import {
  BrowserRouter as Router, Switch, Route, Redirect, Link,
  useParams
} from 'react-router-dom';


interface CarPreviewProps{


  avto: Avtomobil


}

function CarPreview(props: CarPreviewProps) {
  return (
    
        <p>Znamka:{" "+props.avto.znamka+ " "}Model: {" "+props.avto.model+" "} Letnik:  {" "+props.avto.letnik+" "} Cena: {" "+props.avto.cena} </p>
         
        
        


   
   

  
  );
}

export default CarPreview;



