import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoPage from "./pages/CryptoPage/CryptoPage";
import PageFooter from "./components/PageFooter/PageFooter";
import PageHeader from "./components/PageHeader/PageHeader";
import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/crypto" element={<CryptoPage />} />
        </Routes>
      </BrowserRouter>
      <PageFooter />
    </div>
  );
}

export default App;
