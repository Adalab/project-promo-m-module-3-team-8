import React from 'react';
import '../stylesheets/App.scss';

function App() {
  return (
    <>
      <header class="header-cards">
        <a href="index.html" title="Home">
            <img class="header-cards_logo" src="./assets/images/myicon.png" alt="profile-cards"/>
        </a>
      </header>

      <section class="main_container">
        <section class="cards">
          <div>
            <button class="cards_button reset-js" onclick="resetAll()" value="resetinfo">
              <i class="far fa-trash-alt"></i> Reset
            </button>
          </div>
          <section class="cards_box js-card_box palette-1">
            <div class="cards_box-border js-border"></div>
            <div class="cards-box--text">
              <h1 class="cards_box--text--title js-preview-name">Nombre Apellido</h1>
              <h2 class="cards_box--text--subtitle js-preview-job">Front-end developer</h2>
            </div>
            <div class="cards_box-photo js__profile-preview"></div>

            <ul class="cards_box-socialmedia">
              <li class="cards_box-socialmedia--item">
                <i class="fas fa-mobile-alt cards_box-icon-social js-preview-phone js-social">
                  <a href=""></a>
                </i>
              </li>

              <li class="cards_box-socialmedia--item">
                <i class="far fa-envelope cards_box-icon-social js-social">
                  <a class="js-preview-mail"></a>
                </i>
              </li>

              <li class="cards_box-socialmedia--item">
                <a class="js-preview-linkedin" target="_blank" href="">
                  <i class="fab fa-linkedin-in cards_box-icon-social js-social"></i>
                </a>
              </li>

              <li class="cards_box-socialmedia--item">
                <a class="js-preview-github" target="_blank" href="">
                  <i class="fab fa-github-alt cards_box-icon-social js-social"></i>
                </a>
              </li>
            </ul>
          </section>
        </section>

      
        <form class="form" id="cleanForm">
          <fieldset class="user-options">
            <div class="icon2 js-design-title item-collapsable">
              <i class="far fa-object-group list-icon2b"></i>
              <h2 class="legend-fill">diseña</h2>
              
              <button class="ico-scroll js-arrow-up-d">
                <i class="fas fa-angle-up"></i>
              </button>

              <button class="ico-scroll js-arrow-down-d js-hidden">
                <i class="fas fa-angle-down"></i>
            </button>
            </div>
            <div class="color-design">
              <div class="color-container">
                <p>COLORES</p>
              </div>
              <div class="radio-color">
                <label>
                  <input class="js-form js-palette color js-color1" id="color1" type="radio" value="blue" name="palette" checked />
                  <img class="color-image" src="./assets/images/Blue.jpg" />
                </label>
                <label>
                  <input class="js-form js-palette color js-color2" id="color2" type="radio" value="red" name="palette" />
                  <img class="color-image" src="./assets/images/red.jpg" />
                </label>
                <label>
                  <input class="js-form js-palette color js-color3" id="color3" type="radio" value="mixedcolor" name="palette" />
                  <img class="color-image" src="./assets/images/mixed.jpg" />
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset class="info">
            <div class="icon2 js-fill-title2 item-collapsable">
              <i class="far fa-keyboard list-icon2b"></i>
              <h2 class="legend-fill">rellena</h2>
              
              <button class="ico-scroll2 js-arrow-up-f">
                <i class="fas fa-angle-up"></i>
              </button>
              <button class="ico-scroll fill-arrow js-hidden js-arrow-down-f">
                <i class="fas fa-angle-down"></i>
              </button>

            </div>
            <div class="fill-container">
              <label>
                Nombre completo
                <input class="js-form formies js-name" placeholder="Blanket Team" type="text" name="name" />
              </label>
              <label>
                Puesto<input class="js-form formies js-job" placeholder="Frontend Unicorn" type="text" name="job" />
              </label>
              <p>Imagen de perfil</p>

              <div class="image">
                <label class="profile-image" for="img-selector">Añadir Imagen</label>
                <input type="file" name="" id="img-selector" class="js-hidden js__profile-upload-btn" />
                <div class="button-white js__profile-image"></div>
              </div>

              <div>
                <p>
                  E-mail<input class="js-form formies js-mail" placeholder="blanket@blanket.com" type="email" id="mail"
                    name="mail" />
                </p>
                <p>
                  Teléfono
                  <input class="js-form js-preview-phone formies js-phone" placeholder="000000000" type="tel" id="phone" name="phone" />
                </p>
                <p>
                  Linkedin<input class="js-form formies js-linkedin" placeholder="Blanket.Linkedin" type="text"
                    name="linkedin" />
                </p>
                <p>
                  Github<input class="js-form formies js-github" placeholder="Blanket.GitHub" type="text"
                    name="github" />
                </p>
              </div>
            </div>
          </fieldset>
          <div class="icon2 js-share-title3 item-collapsable">
            <i class="fas fa-share-alt list-icon2b"></i>
            <h2 class="legend-fill">comparte</h2>
            
            <button class="ico-scroll2 js-arrow-up-s">
              <i class="fas fa-angle-up"></i>
            </button>
            <button class="ico-scroll share-arrow js-arrow-down-s js-hidden">
              <i class="fas fa-angle-down"></i>
            </button>

          </div>
          <div class="share-container">
            <div class="sharebutton">
              <button class="new-card js-create-card"><i class="far fa-address-card list-icon2c"></i> Crear tarjeta</button>
            </div>
            <div class="card-done js-hidden">
              <p class="tarjeta">La tarjeta ha sido creada:</p>
              <p class="url js-generate"></p>
              <button class="twitter-share" type="button">
              {/* <i class="fab fa-twitter list-icon2c"></i>
                Compartir en twitter
              <a class="js-twitter-link" title="Twitter"></a> */}
              </button>
            </div>
          </div>
        </form>
      </section>
    
      <footer class="footer">
          <small class="footer-small">Awesome profile-cards &copy;2021</small>

          <a title="Blanketfy" href="" target="_blank"> <img class="footer-logo" src="./assets/images/logo.png"
                  alt="Blanktfy"/> </a>
      </footer> 
    </>
 
  );
}
export default App;
