import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import CardPreview from "./CardPreview";
import Design from "./Design";
import Share from "./Share";
import Fill from "./Fill";

function App() {
  return (
    <>
      <Header />
      <section className="main_container">
        <CardPreview />

        <form className="form" id="cleanForm">
          <Design />
          <Fill />
          <Share />
        </form>
      </section>
      <Footer />
    </>
  );
}
export default App;
