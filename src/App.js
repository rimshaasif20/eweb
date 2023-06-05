import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products"
import ProductDetails from "./Pages/ProductDetails"
import Services from "./Pages/Services"
import List from './Pages/List';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/list/:id" element={<ProductDetails />} />
          <Route path="/services" element={<Services />} />
         <Route path="/products" element={<List/>} />
      </Routes>
    </BrowserRouter>
  
   
  );
}

export default App;
