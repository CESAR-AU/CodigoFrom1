import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

import { PageSobreMi } from "./pages/sobre-mi/Sobre-mi";
import { PagePortafolio } from "./pages/portafolio/Portafolio";
import { PageExperiencia } from "./pages/experiencia/Experiencia";
import { PageContacto } from "./pages/contacto/Contacto";
import { PageNotFound } from "./pages/not-found/Not-found";
import { PageUsuarios } from "./pages/usuarios/PageUsuarios";
import "./assets/style/main.scss";

/*
Componente wrapper
*/

export function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Main>
          <Switch>
            <Route path="/sobre-mi">
              <PageSobreMi />
            </Route>
            <Route path="/portafolio">
              <PagePortafolio />
            </Route>
            <Route path="/experiencia">
              <PageExperiencia />
            </Route>
            <Route path="/contacto">
              <PageContacto />
            </Route>
            <Route path="/usuarios">
              <PageUsuarios />
            </Route>
            <Redirect exact from="/" to="/sobre-mi" />
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}
