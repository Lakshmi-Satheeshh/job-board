
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./Pages/Home"
import Abouts from "./Pages/Abouts"
import Product from "./Pages/Product"
import Contact from "./Pages/Contact";
import Category from "./Pages/Category/Category";

function App() {
  return (
    <>
      {/* Navbar stays on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouts/>} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic category page */}
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
   </>
  );
}

export default App;
