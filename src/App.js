import BottomBanner from "./assets/bottom-banner.png";
import PhoneMockup from "./assets/phone-mockup.png";
import PersonPicture from "./assets/person-picture.png";
import SallveLogo from "./assets/sallve-logo.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <main id="quiz--openning">
        <section id="quiz--openning--banner">
          <div className="layout">
            <div className="box_content">
              <h2 className="title_page">
                descubra o que sua pele <span>realmente</span> precisa
              </h2>
              <p className="description">
                conte sobre você e a sua pele e a gente sugere uma{" "}
                <strong>rotina Sallve personalizada</strong>
              </p>
              <a className="btn_go" href="{{ section.settings.btn_go }}">
                quero descobrir
              </a>
              <p className="disclaimer">
                <i className="far fa-clock"></i> leva menos de{" "}
                <strong>5 minutos</strong>
              </p>
            </div>
          </div>
          <div className="figure_mobile">
            <img
              src="https://cdn.shopify.com/s/files/1/0074/3486/2639/files/sallve-landing-mobile_2x_e1206ebd-7d12-47e4-9aa4-f0b0e3c8f01d.png"
              alt=""
            />
          </div>
        </section>

        <section id="quiz--openning--testimonials-slider">
          <div className="slider">
            <div className="slider-inner">
              <div className="card">
                <p>
                  ”Limpa bem sem ressecar (...) sensorial super agradável (...)
                  espuma leve e gentil (...)”
                </p>
                <div className="row justify-space-between">
                  <p>Marina, pele seca</p>
                  <div className="stars-container">
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-gray-1" />
                  </div>
                </div>
              </div>
              <div className="card">
                <p>
                  ”Limpa bem sem ressecar (...) sensorial super agradável (...)
                  espuma leve e gentil (...)”
                </p>
                <div className="row justify-space-between">
                  <p>Marina, pele seca</p>
                  <div className="stars-container">
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-gray-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider reverse">
            <div className="slider-inner">
              <div className="card">
                <p>
                  ”Limpa bem sem ressecar (...) sensorial super agradável (...)
                  espuma leve e gentil (...)”
                </p>
                <div className="row justify-space-between">
                  <p>Marina, pele seca</p>
                  <div className="stars-container">
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-gray-1" />
                  </div>
                </div>
              </div>
              <div className="card">
                <p>
                  ”Limpa bem sem ressecar (...) sensorial super agradável (...)
                  espuma leve e gentil (...)”
                </p>
                <div className="row justify-space-between">
                  <p>Marina, pele seca</p>
                  <div className="stars-container">
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-pink-1" />
                    <i className="fas fa-star color-gray-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="quiz--openning--highlight">
          <div className="testimonial">
            <div className="content">
              <div className="row">
                <p>
                  “
                  <em>
                    Amei essa experiência de{" "}
                    <strong>conhecer mais a minha pele</strong> e{" "}
                    <strong>montar uma rotina só pra mim</strong>
                  </em>{" "}
                  💜“
                </p>
              </div>

              <div className="row justify-space-between align-center">
                <div className="person-infos">
                  <p>
                    <strong>Marcela</strong>
                  </p>
                  <p>pele mista</p>
                </div>
                <div className="stars-container">
                  <i className="fas fa-star color-pink-1" />
                  <i className="fas fa-star color-pink-1" />
                  <i className="fas fa-star color-pink-1" />
                  <i className="fas fa-star color-pink-1" />
                  <i className="fas fa-star color-pink-1" />
                </div>
              </div>

              <div className="quiz-infos row align-center justify-space-between">
                <div className="row align-center">
                  <i className="fas fa-clock color-purple-1" />
                  <p>
                    <strong>5 a 10 </strong>
                    minutos
                  </p>
                </div>

                <div className="row align-center">
                  <i className="fas fa-list color-purple-1" />
                  <p>
                    <strong>6 </strong>
                    funções
                  </p>
                </div>

                <div className="row align-center">
                  <i className="fas fa-hand-holding-water color-purple-1" />
                  <p>
                    <strong>4 </strong>
                    produtos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="recommendations">
            <div className="content">
              <img src={SallveLogo} alt="logo sallve" />
              <p className="recommendation-person">
                Aqui está sua rotina, <span>Marcela</span>
              </p>

              <div className="grid-row">
                <div></div>
                <div className="routine day">
                  <i className="far fa-sun" />
                </div>
                <div className="routine night">
                  <i className="far fa-moon" />
                </div>
              </div>
              <div className="grid-row">
                <p className="routine-title">
                  <span>1</span> limpeza
                </p>
                <div className="product"></div>
                <div className="product"></div>
              </div>
              <div className="grid-row">
                <p className="routine-title">
                  <span>2</span> prevenção e tratamento
                </p>
                <div className="product"></div>
                <div className="product"></div>
              </div>
              <div className="grid-row">
                <p className="routine-title">
                  <span>3</span> hidratação
                </p>
                <div className="product"></div>
                <div className="product"></div>
              </div>
              <div className="grid-row">
                <p className="routine-title">
                  <span>4</span> proteção
                </p>
                <div className="product"></div>
                <div className="product"></div>
              </div>
            </div>
          </div>

          <div className="person-picture">
            <img src={PersonPicture} alt="foto marcela" />
          </div>
        </section>

        <div className="row align-center justify-center">
          <a className="btn_go" href="{{ section.settings.btn_go }}">
            montar minha rotina
          </a>
        </div>

        <section id="quiz--openning--marquee">
          <p>
            · mais de 1.000.000 já descobriram o que a pele precisa · mais de 1
            milhão de pessoas já descobriram o que a pele precisa · mais de
            1.000.000 já descobriram o que a pele precisa · mais de 1 milhão de
            pessoas já descobriram o que a pele precisa
          </p>
        </section>

        <section id="quiz--openning--routines">
          <div className="row align-center justify-center direction-column">
            <h2 className="section-title">
              uma <span>rotina personalizada</span> pra sua pele
            </h2>
            <p className="section-subtitle">
              saiba quais produtos escolher e em qual ordem usar
            </p>
          </div>

          <div className="row align-center justify-center mobile-direction-column-reverse">
            <div className="phone-mockup-wrapper">
              <div className="content">
                <div className="row">
                  <h3>
                    <span>qual é a história da SUA pele?</span>
                  </h3>
                </div>
                <div className="row justify-end">
                  <div className="item">
                    <i className="fa fa-check" />
                    <p>
                      <strong>entre 25 e 29 anos</strong>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <i className="fa fa-check" />
                    <p>
                      <strong>pele sensível</strong>
                    </p>
                  </div>
                </div>
                <div className="row justify-end">
                  <div className="item">
                    <i className="fa fa-check" />
                    <p>
                      <strong>rotina de 5 minutos</strong>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <i className="fa fa-check" />
                    <p>
                      <strong>cravos e oleosidade</strong>
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="phone-mockup-img"
                src={PhoneMockup}
                alt="mockup celular"
                style={{ position: "absolute" }}
              />
            </div>

            <div className="feedback">
              <div className="row align-start">
                <div className="number-container">
                  <p>1</p>
                </div>
                <p>
                  nos <strong>conte</strong> sobre você e sobre a sua pele
                </p>
              </div>
              <div className="row align-start">
                <div className="number-container">
                  <p>2</p>
                </div>
                <p>
                  <strong>descubra as principais funções</strong> e{" "}
                  <strong>fórmulas</strong> que <strong>sua pele</strong>{" "}
                  precisa
                </p>
              </div>
              <div className="row align-start">
                <div className="number-container">
                  <p>3</p>
                </div>
                <p>
                  <strong>customize a sua rotina como preferir</strong> para
                  incluir na sua rotina
                </p>
              </div>
              <div className="row align-start">
                <a className="btn_go" href="{{ section.settings.btn_go }}">
                  quero fazer o teste
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="quiz--openning--bottom-banner">
          <div className="content">
            <p>
              leve sua <strong>rotina Sallve personalizada</strong> com{" "}
              <strong>frete grátis</strong> e <strong>uma necessaire*</strong>
            </p>

            <a className="btn_go white" href="{{ section.settings.btn_go }}">
              eba, montar rotina <span className="emoji">😎</span>
            </a>

            <p>*válido para pedidos a partir de R$150 </p>
          </div>
          <img src={BottomBanner} alt="sallve rotina banner" />
        </section>
      </main>
    </div>
  );
}

export default App;
