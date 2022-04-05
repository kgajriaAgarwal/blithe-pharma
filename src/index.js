import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider} from '../src/Context/ProductContext';
import { CartProvider } from '../src/Context/CartContext';
import { WishlistProvider } from '../src/Context/WishlistContext';
// import { AlertProvider } from '../src/Context/AlertContext';
import { AlertProvider, LayoutProvider } from "./Context";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <AlertProvider>
    <LayoutProvider>
      <CartProvider>
        <WishlistProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
        </WishlistProvider>
      </CartProvider>
      </LayoutProvider>
    </AlertProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
