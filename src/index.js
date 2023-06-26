import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
// TODO: answer here

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <CSSReset />
    <React.StrictMode>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);