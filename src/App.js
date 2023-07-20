import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ConnectUs from "./components/ConnectUs";
import Footer from "./components/Footer";
import OurJourney from "./components/OurJourney";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import MedicalCardMore from "./components/MedicalCardMore";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/ourjourney" exact element={<OurJourney />}></Route>
        <Route path="/about" exact element={<AboutUs />}></Route>
        <Route path="/services" exact element={<Services />}></Route>
        <Route path="/whyus" exact element={<WhyUs/>}></Route>
        <Route path="/services/medicalcode" exact element={<MedicalCardMore/>}></Route>
      </Routes>

      <ConnectUs />
      <Footer />
    </Router>
  );
}

export default App;
