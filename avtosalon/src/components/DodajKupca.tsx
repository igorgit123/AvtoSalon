import React from 'react';
import Avtomobil from '../moduli/Avtomobil';
import Oprema from '../moduli/Oprema';
import Kupec from '../moduli/Kupec';

import { Link, useHistory } from 'react-router-dom';


interface DodajKupcaProps{
  avto: Avtomobil;
  onAdd: (avto: Avtomobil)=> any;

}


function DodajKupca(props: DodajKupcaProps) {
  //Kupec
  const [ime, setIme] = React.useState<string>("");
  const [priimek, setPriimek] = React.useState<string>("");
  const [naslov, setNaslov] = React.useState<string>("");
  const [hisnaSt, setHisnaSt] = React.useState<number>(0);
  const [posta, setPosta] = React.useState<number>(0);
  const [kraj, setKraj] = React.useState<string>("");

  const history = useHistory();


  


  //Kupec
  const handleIme = (e: React.ChangeEvent<HTMLInputElement>)=>{
  setIme(e.target.value)
  } 
  const handlePriimek = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setPriimek(e.target.value)
  }
  const handleNaslov = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setNaslov(e.target.value)
  }
  const handleHisnaSt = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setHisnaSt(Number(e.target.value))
  }
  const handlePosta = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setPosta(Number(e.target.value))
  }
  const handleKraj= (e: React.ChangeEvent<HTMLInputElement>)=>{
    setKraj(e.target.value)
    } 
  

  


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let kupec: Kupec = {
      ime: ime,
      priimek: priimek,
      naslov: naslov,
      hisnaSt: hisnaSt,
      posta: posta,
      kraj: kraj

    }
    props.avto.kupec = kupec;
   
    

    props.onAdd(props.avto)
    history.push('/seznamProdanihAvtov')
};










  return (
    <div className="form-group">
    
      <form onSubmit={handleSubmit}>
      <p> <label>Ime: <input type="text" className="form-control" value={ime} onChange={handleIme}></input></label></p>
     <p><label>Priimek: <input type="text" className="form-control" value={priimek} onChange={handlePriimek}></input></label></p>
     <p><label>Naslov: <input type="text" className="form-control" value={naslov} onChange={handleNaslov}></input></label></p>
     <p><label>Hisna Stevilka: <input type="text" className="form-control" value={hisnaSt} onChange={handleHisnaSt}></input></label></p>
     <p> <label>Posta: <input type="text" className="form-control" value={posta} onChange={handlePosta}></input></label></p>
     <p> <label>Kraj: <input type="text" className="form-control" value={kraj} onChange={handleKraj}></input></label></p>
     
      
        
        
    <button type="submit" className="btn btn-info">Dodaj Kupca</button>
      </form>
      
      





  </div>
  );
}

export default DodajKupca;