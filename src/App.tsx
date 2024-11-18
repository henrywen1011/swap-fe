import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import BlinkingStars from "./components/reusables/StarsBg";
import HomePage from "./pages/HomePage";
import CheckOutPage from "./pages/CheckOut";
import ExchangePage from "./pages/ExchangePage";
import PrivacyPage from "./pages/Privacy";

function App() {
  return (
    <div>    
      <BlinkingStars /> 
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="how-it-works" element={<ExchangePage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
