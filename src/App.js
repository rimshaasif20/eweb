import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products"
import ListItems from "./Pages/ListItems"
import Services from "./Pages/Services"


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Products />} />
          <Route path="list" element={<ListItems />} />
          <Route path="services" element={<Services />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
