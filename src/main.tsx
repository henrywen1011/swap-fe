import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import GlobalProvider from "@contexts/GlobalContext.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ModalsContainer from "@components/reusables/Modals/ModalsContainer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        pauseOnHover={false}
        theme="dark"
        // toastClassName={clsx(sora.className, "text-sm")}
      />
      <ModalsContainer />
    </GlobalProvider>
  </StrictMode>
);
