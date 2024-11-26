import { Route, Routes } from "react-router-dom";
import Header from "@components/header/Header";
import BlinkingStars from "@components/reusables/StarsBg";
import HomePage from "@pages/HomePage";
import CheckOutPage from "@pages/CheckoutPage";
import ExchangePage from "@pages/ExchangePage";
import PrivacyPage from "@pages/Privacy";
import SwapProvider from "@contexts/SwapContext";
import PageLoader from "@components/reusables/PageLoader";
import CheckoutProvider from "@contexts/CheckoutContext";

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
                {" "}
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
