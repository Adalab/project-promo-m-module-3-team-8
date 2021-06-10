import React from 'react';
import '../stylesheets/App.scss';
//import Header from './components/Header';
//import Footer from './components/Footer';
import { Link, Route } from 'react-router-dom';
import App from './App';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <main class='main-container'>
          <h2 class='main-container__title'>Crea tu tarjeta de visita</h2>
          <p class='main-container__text'>
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
          <nav class='nav-container'>
            <ul class='nav-container___list'>
              <li class='nav-container___list--item'>
                <i class='far fa-object-group list-icon'></i>
                <span class='list-text'>Diseña</span>
              </li>
              <li class='nav-container___list--item'>
                <i class='far fa-keyboard list-icon'></i>
                <span class='list-text'>Rellena</span>
              </li>
              <li class='nav-container___list--item'>
                <i class='fas fa-share-alt list-icon'></i>
                <span class='list-text'>Comparte</span>
              </li>
            </ul>
          </nav>
          <Link to='./App'>
            Comenzar
            {/* <a class='main-container__link' href='./profile-cards.html'>
              comenzar
            </a> */}
          </Link>
          {/* <Route path='/App' component={App} /> */}
        </main>
      </>
    );
  }
}

export default Landing;
