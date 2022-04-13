import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoPage from "./components/CryptoPage/CryptoPage";
import PageFooter from "./components/PageFooter/PageFooter";
import PageHeader from "./components/PageHeader/PageHeader";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CryptoPage />} />
        </Routes>
      </BrowserRouter>
      <PageFooter />
    </div>
  );
}

export default App;
