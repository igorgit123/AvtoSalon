class Oprema{

  gorivo?: String;
  menjalnik?: String;
  poraba?: Number;
  klima?: String;
  zarometi?: String;
  premikOkna?: String;
  premikSedezev?: String;


  constructor(gorivo?: String, menjalnik?: String, poraba?: Number,
    klima?: String, zarometi?: String, premikOkna?: String, premikSedezev?: String) {
    
    this.gorivo = gorivo;
    this.menjalnik = menjalnik;
    this.poraba = poraba;
    this.klima = klima;
    this.zarometi = zarometi;
    this.premikOkna = premikOkna;
    this.premikSedezev = premikSedezev;
    

  }



}

export default Oprema;