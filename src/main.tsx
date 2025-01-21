import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { ThemeProvider } from "app/providers/themeProvider/ui/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
