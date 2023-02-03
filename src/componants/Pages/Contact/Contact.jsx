import React from "react";
import Header from "../../Global/Header";
import "./style/contact.css";
import Map from './Map'
import Footer from "../../Global/Footer";

export default function Drinks() {
  return (
    <div>
      <Header />
      <form action="">
        <fieldset>
            <legend>Contactez-nous</legend>
        <div className="For1">
            <div className="test">
          <label className="LabelContact1" htmlFor="">
            nom complet :
          </label>
          <input className="ForContact1 color" type="text" placeholder="Votre nom" />
          </div>
          <div className="test2">
          <label className="LabelContact2" htmlFor="">
            Votre e-mail :
          </label>
          <input
            className="ForContact2 color"
            type="e-mail"
            placeholder="Votre e-mail"
          />
          </div>
        </div>
        <div className="For2">
          <label className="LabelContact3" htmlFor="">
            Sujet :
          </label>
          <input className="ForContact3 color" type="text" placeholder="Sujet" />

          <label className="LabelContact4" htmlFor="">
            Votre message :
          </label>
          <input
            className="ForContact4 color"
            type="text"
            placeholder="Votre message"
          />
          <input className="Submit kb-btn-1" type="submit" placeholder="Envoyer" />
        </div>
        
        </fieldset>
      </form>
      <Map />
      <Footer />
    </div>

    
  );
}
