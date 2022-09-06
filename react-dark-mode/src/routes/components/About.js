import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "../../../../src/styles/_dark-mode.scss";
import "../../../../src/styles/_light-mode.scss";

function About() {
  //using State and Effect from React
  const [darkMode, setDarkModeInApplication] = React.useState(
    getInitialModeOfApplication()
  );

  function getInitialModeOfApplication() {
    const savedModeOfApplication = JSON.parse(localStorage.getItem("dark"));
    return savedModeOfApplication || false;
  }
  React.useEffect(() => {
    if (localStorage !== undefined) {
      localStorage.setItem("dark", JSON.stringify(darkMode)); //put the dark mode in local storage
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark-mode " : "app light-mode"}>
      <div className="moveButtonToRight">
        <button
          onClick={
            () => setDarkModeInApplication((prevDarkMode) => !prevDarkMode) //Previous state is persisted and allow user to change it
          }
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          className="app_dark-mode-btn icon level-right modeButton"
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
      </div>
      <main>
        <div className="level">
          <div>
            <h1 className="title">
              {darkMode ? "Dark Mode(About Page)" : "Light Mode(About Page)"}
            </h1>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <p>
              Lollipop powder powder. Cotton candy caramels chupa chups halvah
              muffin caramels apple pie topping cake. Topping chocolate bar
              pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing
              sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant
              apple pie pudding caramels wafer tart tootsie roll macaroon.
              Croissant tiramisu chocolate bar carrot cake lemon drops halvah.
            </p>
          </div>
          <div className="column">
            <p>
              Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
              tart. Muffin chupa chups pie. Brownie apple pie topping lemon
              drops marzipan toffee. Pudding macaroon icing ice cream bonbon
              cake tart. Pudding sugar plum chocolate cake cake biscuit pastry
              pastry chocolate bar tart. Lemon drops dessert gummies icing.
            </p>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Name" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Email" />
          </div>
        </div>

        <section className="section">
          <div className="buttons level-right">
            <a className="button is-primary">Save</a>
            <a className="button is-link">Submit</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
