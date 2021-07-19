import React, { Component } from "react";
import Navigation from "../../components/navigation/navigation.js";
import Slider from "../../components/carousal/carousal.js";
import Showboard from "../../components/displayboard/displayitems.js";
import Displaycard from "../../components/showcard/showcard.js";
import Counter from "../../components/counter/counter.js";
import Transaction from "../../components/transaction/transaction.js";
import Footer from "../../components/footer/footer.js";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Slider />
        <Showboard />
        <Displaycard />
        <Counter />
        <Transaction />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
