import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { store } from "./store/store.Jsx";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
