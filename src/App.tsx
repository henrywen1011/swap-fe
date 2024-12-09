import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage";
import PrivacyPage from "@pages/Privacy";
import CheckOutPage from "@pages/CheckoutPage";
import ExchangePage from "@pages/ExchangePage";
import SwapProvider from "@contexts/SwapContext";
import CheckoutProvider from "@contexts/CheckoutContext";
import Header from "@components/header/Header";
import BlinkingStars from "@components/reusables/StarsBg";
import PageLoader from "@components/reusables/PageLoader";

function App() {
  return (
    <div>
      <BlinkingStars />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <SwapProvider>
                <HomePage />
              </SwapProvider>
            }
          />
          <Route
            path="checkout/:order_id"
            element={
              <CheckoutProvider>
                <CheckOutPage />
              </CheckoutProvider>
            }
          />
          <Route path="how-it-works" element={<ExchangePage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
      <PageLoader />
    </div>
  );
}

export default App;
