import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Products from "./sections/Products";
import Header from "./sections/header";

function App() {
  return (
    <div className="bg-snowWhite pt-10 pb-4 h-full">
      <Header />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
