import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import MainScreen from "./screens/MainScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import AllProductsScreen from "./screens/AllProductsScreen";
import DermotologyScreen from "./screens/DermotologyScreen";
import DepressionScreen from "./screens/DepressionScreen";
import DentalScreen from "./screens/DentalScreen";

import FractureScreen from "./screens/FractureScreen";
import WomensCareScreen from "./screens/WomensCareScreen";
import AdminScreen from "./screens/AdminScreen";
// import

import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";


function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const user = localStorage.getItem("token");

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Routes>
          {/* {user && <Route path="/" exact element={<Main />} />} */}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route exact path="/" element={<Navigate replace to="/login" />} />
          {user && <Route exact path="/mainscreen" element={<MainScreen/>} />}
          <Route exact path="/allProducts" element={<AllProductsScreen/>} />
          <Route exact path="/product" element={<HomeScreen/>} />
          <Route exact path="/product/:id" element={<ProductScreen/>} />
          <Route exact path="/products/dermatology" element={<DermotologyScreen/>}/>
          <Route exact path="/products/depression" element={<DepressionScreen/>}/>
          <Route exact path="/products/dental" element={<DentalScreen/>} />
          <Route exact path="/products/fracture" element={<FractureScreen/>} />
          <Route exact path="/products/womensCare"element={<WomensCareScreen/>}/>
          <Route exact path="/about" element={<AboutScreen/>} />
          <Route exact path="/contact" element={<ContactScreen/>} />
          <Route exact path="/admin" element={<AdminScreen/>} />
          <Route exact path="/cart" element={<CartScreen/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;