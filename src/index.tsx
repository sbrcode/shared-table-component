import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Providers from "./providers";
import { ThemeProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <Providers>
      <App />
    </Providers>
  </ThemeProvider>
);
