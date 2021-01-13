import Kupec from "./Kupec";
import Oprema from "./Oprema";

class Avtomobil{

  slikaUrl?: string;
  cena?: Number;
  znamka?: String;
  model?: String;
  letnik?: Number;
  vin?: String;
  barva?: String;
  oprema?: Oprema;
  opis?: String;
  najet?: Boolean;
  prodan?: Boolean;
  kupec?: Kupec;
  
  constructor(slikaUrl?: string, cena?: Number, znamka?: String, model?: String, letnik?: Number,
    vin?: String, barva?: String, oprema?: Oprema, opis?: String, najet?: Boolean, prodan?: Boolean, kupec?: Kupec) {
    
    this.slikaUrl = slikaUrl;
    this.cena = cena;
    this.znamka = znamka;
    this.model = model;
    this.letnik = letnik;
    this.vin = vin;
    this.barva = barva;
    this.oprema = oprema;
    this.opis = opis;
    this.najet = najet;
    this.prodan = prodan;
    this.kupec = kupec;

    
  

}




} 
export default Avtomobil;