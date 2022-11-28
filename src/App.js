import React, { useState, useEffect } from "react";

import "./App.css";
import Button from "./components/Button/Button";
import HeaderFooterWrapper from "./components/HeaderFooterWrapper/HeaderFooterWrapper";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import MoviesContainer from "./components/MoviesContainer/MoviesContainer";
import logo from "./imgs/logo.png";
import creditCardsImg from "./imgs/creditCards.png";

function App() {
  return (
    <div className="App">
      <HeaderFooterWrapper>
        <img className="logo" src={logo} alt="logo" />
        <Button type="big" name="Sign In" />
      </HeaderFooterWrapper>
      <main>
        <HeroBanner />
        <MoviesContainer />
        <Button type="big" name={"Get More Content"} />
      </main>
      <HeaderFooterWrapper>
        <p>We care about your entertainment. Copyright © 2019–2021 felix.com</p>
        <img src={creditCardsImg} alt="credit card logos" />
      </HeaderFooterWrapper>
    </div>
  );
}

export default App;
