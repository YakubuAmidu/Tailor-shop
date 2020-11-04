import React from "react";
import Menone from "../assets/Menone.png";
import Mentwo from "../assets/Mentwo.png";
import Menthree from "../assets/Menthree.png";
import Menfour from "../assets/Menfour.png";

const ProductScreen = () => {
  return (
    <div className="Product_section">
      <p>World's finest and elegant tuxedo's</p>
      <div>
        <div>
          <img src={Menone} alt="img" />
          <h4>product name</h4>
          <p>$1,000.00</p>
        </div>
        <div>
          <img src={Mentwo} alt="img" />
          <h4>product name</h4>
          <p>$1,000.00</p>
        </div>
        <div>
          <img src={Menthree} alt="img" />
          <h4>product name</h4>
          <p>$1,000.00</p>
        </div>
        <div>
          <img src={Menfour} alt="img" />
          <h4>product name</h4>
          <p>$1,000.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
