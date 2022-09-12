import React from "react";
import { NavBar } from "./components";
import { Contact, Skills, Projects, Header, Footer } from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
