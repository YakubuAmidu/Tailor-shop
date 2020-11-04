import React from "react";
import Links from "./Links";
import Header from "./Header";
import About from "./About";
import Service from "./Service";

const App = () => {
  return (
    <div>
      <Links />
      <Header />
      <hr />
      <About />
      <hr />
      <Service />
    </div>
  );
};

export default App;
