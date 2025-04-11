import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./lib/i18n";
import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: false,
  offset: 100,
  mirror: true
});

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
