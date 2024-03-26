import capa1 from "../assets/capa1.png";
import capa2 from "../assets/capa2.png";
import capa3 from "../assets/capa3.png";
import capa4 from "../assets/capa4.png";
import capa5 from "../assets/capa5.png";
import capa6 from "../assets/capa6.png";
import capa7 from "../assets/capa7.png";
import capa8 from "../assets/capa8.png";
import capa9 from "../assets/capa9.png";
import capa10 from "../assets/capa10.png";
import capa11 from "../assets/capa11.png";
import capa12 from "../assets/capa12.png";
import capa13 from "../assets/capa13.png";
import capa14 from "../assets/capa14.png";

const capas = [
  { id: 1, path: capa1, tag: "educacional", capaEquipe: "" },
  { id: 2, path: capa2, tag: "educacional" },
  { id: 3, path: capa3, tag: "educacional" },
  { id: 4, path: capa4, tag: "educacional" },
  { id: 5, path: capa5, tag: "educacional" },
  { id: 6, path: capa6, tag: "educacional" },
  { id: 7, path: capa7, tag: "educacional" },
  { id: 8, path: capa8, tag: "educacional" },
  { id: 9, path: capa9, tag: "educacional" },
  { id: 10, path: capa10, tag: "apae" },
  { id: 11, path: capa11, tag: "apae" },
  { id: 12, path: capa12, tag: "educacional" },
  { id: 13, path: capa13, tag: "apae" },
  { id: 14, path: capa14, tag: "apae" },
];

const educacionais = capas.filter((capa) => capa.tag == "educacional");
const apae = capas.filter((capa) => capa.tag == "apae");

export { educacionais, apae };
