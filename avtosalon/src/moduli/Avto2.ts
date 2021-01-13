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

let avto2: Avtomobil = new Avtomobil(
  "https://car-images.bauersecure.com/pagefiles/91669/gt3rs_042.jpg",
  1000000,
  "Porsche",
  "GT3 RS",
  2021,
  "8dsv77def7ef7",
  "crna",
  oprema,
  "najjaci nurburgring casi bla bla bla",
  false,
  false
) 

export default avto2