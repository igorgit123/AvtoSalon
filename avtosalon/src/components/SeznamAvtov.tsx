import React from 'react';
import CarPreview from './CarPreview'
import Avtomobil from '../moduli/Avtomobil';
import { Link } from 'react-router-dom';

interface SeznamAvtovProps{
  avti: Avtomobil[]


}


function SeznamAvtov(props: SeznamAvtovProps) {




  if (props.avti.length > 0) {
  

if (props.avti[0].najet === true) {
  return (
    <div>


      <ul className="list-group">
        {
          props.avti?.map((avto, index) => {
            return <li className="list-group-item"><Link to={"/sezNajetihAvtov/" + index}>
              <CarPreview avto={props.avti[index]} />
            </Link></li>;
          })
        }
      </ul>
    
    </div>
    );





} else if (props.avti[0].prodan === true) {
  return (
    <div>


      <ul className="list-group">
        {
          props.avti?.map((avto, index) => {
            return <li className="list-group-item"><Link to={"/sezProdanihAvtov/" + index}>
              <CarPreview avto={props.avti[index]} />
            </Link></li>;
          })
        }
      </ul>
    
    </div>
  );

}else {
  return (
    <div>


    <ul className="list-group">
      {
        props.avti?.map((avto, index) => {
          return <li className="list-group-item"><Link to={"/avto/" + index}>
            <CarPreview avto={props.avti[index]} />
          </Link></li>;
        })
      }
    </ul>
  
  </div>
  );
    
    
    
}






  } else {
    return (<div>

    </div>
    );
    








}



  
}

export default SeznamAvtov;



