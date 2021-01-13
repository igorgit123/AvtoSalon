import React from 'react';
import Avtomobil from '../moduli/Avtomobil';
import Oprema from '../moduli/Oprema';
import Kupec from '../moduli/Kupec';

import { Link, useHistory } from 'react-router-dom';


interface DodajAvtomobilProps{
  onAdd: (avto: Avtomobil)=> any;

}


function DodajAvtomobil(props: DodajAvtomobilProps) {
  //avtomobil
  const [slikaUrl, setSlikaUrl] = React.useState<string>("");
  const [cena, setCena] = React.useState<number>(0);
  const [znamka, setZnamka] = React.useState<string>("");
  const [model, setModel] = React.useState<string>("");
  const [letnik, setLetnik] = React.useState<number>(0);
  const [vin, setVin] = React.useState<string>("");
  const [barva, setBarva] = React.useState<string>("");
  const [opis, setOpis] = React.useState<string>("");
  
  //oprema
  const [gorivo, setGorivo] = React.useState<string>("");
  const [menjalnik, setMenjalnik] = React.useState<string>("");
  const [poraba, setPoraba] = React.useState<number>(0);
  const [klima, setKlima] = React.useState<string>("");
  const [zarometi, setZarometi] = React.useState<string>("");
  const [premikOkna, setPremikOkna] = React.useState<string>("");
  const [premikSedezev, setPremikSedezev] = React.useState<string>("");

  
  const history = useHistory();

//avtomobil
const handleSlikaUrl = (e: React.ChangeEvent<HTMLInputElement>)=>{
  setSlikaUrl(e.target.value)
}
  const handleCena = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setCena(Number(e.target.value))
  }
  const handleZnamka = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setZnamka(e.target.value)
  }
  const handleModel = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setModel(e.target.value)
  }
  const handleLetnik = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setLetnik(Number(e.target.value))
  }
  const handleVin = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setVin(e.target.value)
  }
  const handleBarva = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setBarva(e.target.value)
  }
  const handleOpis = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setOpis(e.target.value)
  }

  //Oprema
  const handleGorivo = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setGorivo(e.target.value)
  }
  const handleMenjalnik = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setMenjalnik(e.target.value)
  }
  const handlePoraba = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setPoraba(Number(e.target.value))
  }
  const handleKlima = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setKlima(e.target.value)
  }
  const handleZarometi = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setZarometi(e.target.value)
  }
  const handlePremikOkna = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setPremikOkna(e.target.value)
  }
  const handlePremikSedezev = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setPremikSedezev(e.target.value)
  }

  
  


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let oprema: Oprema = {
      gorivo: gorivo,
      menjalnik: menjalnik,
      poraba: poraba,
      klima: klima,
      zarometi: zarometi,
      premikOkna: premikOkna,
      premikSedezev: premikSedezev
    }

    let avto: Avtomobil = {
      
      slikaUrl: slikaUrl,
      cena: cena,
      znamka: znamka,
      model: model,
      letnik: letnik,
      vin: vin,
      barva: barva,
      oprema: oprema,
      opis: opis,
      najet: false,
      prodan: false

    }
    

    props.onAdd(avto)
    history.push('/seznamAvtov')
};










  return (
   
    <div className="form-group">
    
      <form onSubmit={handleSubmit}>
      <p> <label>Url Slike: <input type="text" className="form-control" value={slikaUrl} onChange={handleSlikaUrl}></input></label></p>
      <p><label>Cena: <input type="text" className="form-control" value={cena} onChange={handleCena}></input></label></p>
      <p><label>Znamka: <input type="text" className="form-control" value={znamka} onChange={handleZnamka}></input></label></p>
     <p><label>Model: <input type="text" className="form-control" value={model} onChange={handleModel}></input></label></p>
     <p> <label>Letnik: <input type="text" className="form-control" value={letnik} onChange={handleLetnik}></input></label></p>
     <p> <label>VIN številka: <input type="text" className="form-control" value={vin} onChange={handleVin}></input></label></p>
     <p><label>Barva: <input type="text" className="form-control" value={barva} onChange={handleBarva}></input></label></p>
        <p><label>Opis: <input type="text" className="form-control" value={opis} onChange={handleOpis}></input></label></p>
        



        

    <p><label className="radio-inline">Gorivo: </label>
       <label className="radio-inline"><input type="radio" value="Bencin" onChange={handleGorivo} checked={gorivo === "Bencin"}/>Bencin </label>    
        <label className="radio-inline"><input type="radio" value="Dizel" onChange={handleGorivo} checked={gorivo === "Dizel"} />Dizel </label>
        <label className="radio-inline"><input type="radio" value="Elektrika" onChange={handleGorivo} checked={gorivo === "Elektrika"} />Elektrika </label>
        <label className="radio-inline"><input type="radio" value="CNG" onChange={handleGorivo} checked={gorivo === "CNG"}/>CNG </label>
       <label className="radio-inline">Izbrano: {gorivo}  </label>
    </p>     
        
    <p><label className="radio-inline">Menjalnik: </label>
        <label className="radio-inline"><input type="radio" value="Avtomatski" onChange={handleMenjalnik} checked={menjalnik === "Avtomatski"}/>Avtomatski </label>    
        <label className="radio-inline"><input type="radio" value="Manual" onChange={handleMenjalnik} checked={menjalnik === "Manual"}/>Manual </label>
        <label className="radio-inline">Izbrano: {menjalnik}  </label>
    </p>  
   
        
     <p><label className="radio-inline">Poraba: <input type="text" className="form-control" value={poraba} onChange={handlePoraba}></input></label></p>
        

     <p><label className="radio-inline">Klima: </label>
        <label className="radio-inline"><input type="radio" value="Ja" onChange={handleKlima} checked={klima === "Ja"}/>Ja </label>    
        <label className="radio-inline"><input type="radio" value="Ne" onChange={handleKlima} checked={klima === "Ne"}/>Ne </label>
        <label className="radio-inline">Izbrano: {klima}  </label>
    </p>  
        
        
     <p><label className="radio-inline">Zarometi: </label>
        <label className="radio-inline"><input type="radio" value="LED" onChange={handleZarometi} checked={zarometi === "LED"}/>LED </label>
        <label className="radio-inline"><input type="radio" value="XENON" onChange={handleZarometi} checked={zarometi === "XENON"}/>XENON </label>
        <label className="radio-inline"><input type="radio" value="Halogen" onChange={handleZarometi} checked={zarometi === "Halogen"}/>Halogen </label>
        <label className="radio-inline">Izbrano: {zarometi}  </label>
     </p>
        
      
     <p><label className="radio-inline">Premik okna: </label>
        <label className="radio-inline"><input type="radio" value="Električni" onChange={handlePremikOkna} checked={premikOkna === "Električni"}/>Električni </label>    
        <label className="radio-inline"><input type="radio" value="Ročni" onChange={handlePremikOkna} checked={premikOkna === "Ročni"}/>Ročni </label>
        <label className="radio-inline">Izbrano: {premikOkna}  </label>
    </p>  
        
    <p><label className="radio-inline">Premik sedežev: </label>
        <label className="radio-inline"><input type="radio" value="Električni" onChange={handlePremikSedezev} checked={premikSedezev === "Električni"}/>Električni </label>    
        <label className="radio-inline"><input type="radio" value="Ročni" onChange={handlePremikSedezev} checked={premikSedezev === "Ročni"}/>Ročni </label>
        <label className="radio-inline">Izbrano: {premikSedezev}  </label>
    </p>       
         
      
        
        
    <button type="submit" className="btn btn-info">Dodaj Avtomobil</button>
      </form>
      
       <p>< Link to="/seznamAvtov">nazaj na seznam</Link></p>





  </div>
  );
}

export default DodajAvtomobil;