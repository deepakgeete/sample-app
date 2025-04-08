import { React } from "react"

import HomePage from "./Components/HomePage";
import ProductOverview from "./Components/ProductOverview"
import ProductFeatures from "./Components/ProductFeatures"
import ProductBenefits from "./Components/ProductBenefits"
import AvailablePlans from "./Components/AvailablePlans"
import LoginPage from "./Components/LoginPage"

import "./styles.css";


export default function App() {
  return (
    <>
      <div class="paddingTop">
        <HomePage/>
      </div>

      <hr class="componentSeparator" />
      
      <div class="paddingTop">
        <ProductOverview/>
      </div>

      <hr class="componentSeparator" />

      <div class="paddingTop">
        <ProductFeatures/>
      </div>

      <hr class="componentSeparator" />

      <div class="paddingTop">
        <ProductBenefits/>
      </div>

      <hr class="componentSeparator" />

      <div class="paddingTop">
        <AvailablePlans/>
      </div>

      <hr class="componentSeparator" />

      <div class="paddingTop">
        <LoginPage/>
      </div>
    </>
  );
}
