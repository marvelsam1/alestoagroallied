import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./layouts/navbar/Navbar";
import Footer from "./layouts/Footer";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import ProductPage from "./pages/products/ProductPage";

const App = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setIsScroll(scrolled > 50);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar isScroll={isScroll} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/" element={<Contact />} />
          {/* <Route path="/blogs/:id" element={<BlogDetails blogs={blogData} />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
