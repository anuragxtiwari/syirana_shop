import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import CTA from "./components/CTA";

import ProductPage from "./pages/ProductPage";

function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <About />
      <CTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;