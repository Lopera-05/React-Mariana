// como es un componente que actualiza se exporta
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
/* function App() {
  return (
    <div className="App">
      <Review texto="¡Gracias por visitar mi perfil, contactate con nosotros si te interesa nuestro servicio!"
      imagen="Roca"
      nombre="Felipe Mendez"
      cargo="Asesor comercial"/>

<Review texto="¡Gracias por visitar mi perfil, contactate con nosotros si te interesa nuestro servicio!"
      imagen="foto"
      nombre="Yuliana Carmona"
      cargo="Asesora de ventas"/>

<Review texto="¡Gracias por visitar mi perfil, contactate con nosotros si te interesa nuestro servicio!"
      imagen="Caroline"
      nombre="Yarleny Zulita"
      cargo="Administradora del area"/>
    </div>
  );
} */
function App () {
  return (
  <div className="App">
    <Card imagenprincipal="foto"
    textoprincipal="Dayana Patricia"
    parrafoinicial=" Me gusta salir con mis amigos"
    edad="23 años"
    profesion="Mecatronica"
    avatar="modelo1"
    nombre="Andrea Martinez"
    imgCarrera="carrera.png"
    imgEdad="mas18.png"/>

<Card imagenprincipal="Roca"
    textoprincipal="Aurelio Morales"
    parrafoinicial="Soy un hombre casado con 3 hijas"
    profesion="Empresario"
    avatar="Caroline"
    edad="45 años"
    nombre="Andrea Martinez"
    imgCarrera="carrera2.png"
    imgEdad="edad.png"/>

<Card imagenprincipal="mujer3"
    textoprincipal="Antonela Lopez"
    parrafoinicial="Emprendedora de jabones para baño"
    profesion="Mercadeo"
    avatar="Roca"
    edad="29 años de edad"
    nombre="Maria Jose"
    imgCarrera="carrera3.png"
    imgEdad="edad.png"/>
  </div>
  )
  
}
export default App;
