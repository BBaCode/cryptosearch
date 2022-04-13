import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoPage from "./pages/CryptoPage/CryptoPage";

import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/crypto" element={<CryptoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
