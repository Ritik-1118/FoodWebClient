import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authprovider } from "./store/auth.jsx";
import { CartProvider } from "./store/card.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Authprovider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </Authprovider>
);
