import "./App.css";
import Navbar from "./components/Nav/Navbar";

import MyComponent from "./components/gMap";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <section class="hero">
          <div class="wrapper">
            <img
              src="./Bioimpedancio_logo_banner.jpeg"
              alt="bioimpedancio viña"
            />
          </div>
          <p>
            La bioimpedanciometria INBODY es la forma más responsable y efectiva
            porque evalúa la cantidad de grasa que realmente pierde el paciente.
          </p>
          <p>
            Estudio de composición corporal. La mejor forma de cuantificar los
            componentes de nuestro cuerpo, diferenciando lo que es masa grasa
            (tejido adiposo) de la masa magra (músculos, huesos, órganos).
          </p>
        </section>
        <section class="instagram" id="pedirUnaCotizacion">
          <div>
            <button
              onClick={() =>
                window.open("https://www.instagram.com/bioimpedancio/")
              }
            >
              <FaInstagram />
            </button>
          </div>
        </section>
        <section id="agendarHora" class="buttons">
          <p>Agenda tu hora aqui: 9 3366 0042</p>
          <button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=56933660042&text&app_absent=0"
              )
            }
          >
            <FaWhatsapp />
          </button>
          <p>Dirección</p>
          <p>
            Las Tortolas 184 entrada por Avenida Gastón Hamel Nieto 2 piso
            centro comercial Viña del Mar Valparaíso Chile
          </p>
          <p>Horario de atención</p>
          <p>lunes a viernes: 10:00-17:30, sabado: 9:30-13:00</p>
        </section>
        <section class="images">
          <img src="./21.10.05 1.png" alt="1" />
          <img src="./21.16.15 2.png" alt="2" />
          <img src="./21.16.38 3.png" alt="3" />
          <img src="./21.22.07 4.png" alt="4" />
          <img src="./2022-01-10 5.jpg" alt="5" />
        </section>
        <section id="comoLlegar">
          {/* <div id="map" /> */}
          <MyComponent />
        </section>
      </div>
    </div>
  );
}

export default App;
