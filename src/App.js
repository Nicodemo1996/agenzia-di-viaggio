import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TripDetails from "./pages/TripDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trip/:id" element={<TripDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
