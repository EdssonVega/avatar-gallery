import logoAvatar from "./components/images/logo-avatar.PNG"
import aire from "./components/images/logo-nomades-aire.PNG"
import fuego from "./components/images/logo-nacion-fuego.PNG"
import agua from "./components/images/logo-tribu-agua.PNG"
import tierra from "./components/images/logo-reino-tierra.PNG"

import './App.css';
import Personaje from "./components/CharacterCard";

import aang from "./components/images/aang.PNG"
import gyatso from "./components/images/gyatso.PNG"
import yangchen from "./components/images/Yangchen.PNG"
import zuko from "./components/images/zuko.PNG"
import azula from "./components/images/azula.PNG"
import iroh from "./components/images/iroh.PNG"
import katara from "./components/images/katara.PNG"
import sokka from "./components/images/sokka.PNG"
import yue from "./components/images/yue.PNG"
import toph from "./components/images/toph.PNG"
import bumi from "./components/images/bumi.PNG"
import kyoshi from "./components/images/kyoshi.PNG"

function App() {
  return (
    <div className="App">
      <figure className='cartel-encabezado'>
        <img src={logoAvatar} className="logo-avatar" alt="logo Avatar"/>
      </figure>
      <h1>PERSONAJES</h1>
      <div className="agua">
        <h2>Tribu del agua:</h2>
        <div className="contenedor-personajes">
        <Personaje image={katara} nombre="katara" logoNacion={agua}/>
        <Personaje image={sokka} nombre="sokka" logoNacion={agua}/>
        <Personaje image={yue} nombre="yue" logoNacion={agua}/>
        </div>
      </div>
      <div className="tierra">
        <h2>Reino tierra:</h2>
        <div className="contenedor-personajes">
        <Personaje image={toph} nombre="toph" logoNacion={tierra}/>
        <Personaje image={bumi} nombre="bumi" logoNacion={tierra}/>
        <Personaje image={kyoshi} nombre="kyoshi" logoNacion={tierra}/>
        </div>
      </div>
      <div className="fuego">
        <h2>Nacion del fuego:</h2>
        <div className="contenedor-personajes">
        <Personaje image={zuko} nombre="zuko" logoNacion={fuego}/>
        <Personaje image={azula} nombre="azula" logoNacion={fuego}/>
        <Personaje image={iroh} nombre="yang chen" logoNacion={fuego}/>
        </div>
      </div>
      <div className="aire">
        <h2>Nomades aire:</h2>
        <div className="contenedor-personajes">
        <Personaje image={aang} nombre="aang" logoNacion={aire}/>
        <Personaje image={gyatso} nombre="gyatso" logoNacion={aire}/>
        <Personaje image={yangchen} nombre="yang chen" logoNacion={aire}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
