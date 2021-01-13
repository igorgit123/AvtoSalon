import Avtomobil from '../moduli/Avtomobil';
import Oprema from '../moduli/Oprema';
import Kupec from '../moduli/Kupec';




let oprema: Oprema = new Oprema(
  "Bencin",
  "Avtomatski",
  5.5,
  "Ja",
  "Xenon",
  "elektronski",
  "elektronski"
)


let avto1: Avtomobil = new Avtomobil(
  "https://i.ytimg.com/vi/kiZbCFefCTA/maxresdefault.jpg",
  1000000,
  "Mercedes-Amg brabus",
  "6x6",
  2015,
  "8dsv77def7ef7",
  "crna",
  oprema,
  "masinski avto, najvecji hakl na svetu",
  false,
  false
) 

export default avto1