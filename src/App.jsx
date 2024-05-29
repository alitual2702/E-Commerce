import "./App.css";
import Category from "./Components/Categories/Category";
import Feature from "./Components/Feature Products/Feature";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Arrival from "./Components/New Arrival/Arrival";
import New from "./Components/Newsletter/New";
import Producttwo from "./Components/Promotion Products 2/Producttwo";
import Productone from "./Components/Promotions Products/Productone";
import Repair from "./Components/Repairing/Repair";

function App() {
  return (
   
  
    <div className="parent">
      <Navbar />

      <Hero />

      <Category />

      <Feature />

      <Repair />

      <Arrival />


      <Productone />

      <Producttwo />

      <New />

      <Footer />
    </div>
  
   
  );
}

export default App;
