import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import Card from "./Components/Carousel/Card/Card";
import { carouselData } from "./ImageData";
import Header from "./Components/Navbar/Header/Header";

const App = () => {
  const [navbarContainer, setNavbarContainer] = useState(false);

  const renderCard = (item) => <Card data={item} />;

  return (
    <main className="App" aria-label="Ritz-Carlton Homepage">
      {/* Header */}
      <header aria-label="Website header">
        <Header
          navbarContainer={navbarContainer}
          setNavbarContainer={setNavbarContainer}
        />
      </header>

      {/* Main Navigation */}
      <Navbar navbarContainer={navbarContainer} />

      {/* Carousel Section */}
      <section aria-label="Featured destinations carousel">
        <Carousel renderCard={renderCard} data={carouselData} />
      </section>
    </main>
  );
};

export default App;
