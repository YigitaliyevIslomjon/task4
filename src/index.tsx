import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./i18n";
import "sweetalert2/src/sweetalert2.scss";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
let fallback = (
  <div className="h-screen flex justify-center items-center">
    <CircularProgress />
  </div>
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <React.Suspense fallback={fallback}>
            <App />
          </React.Suspense>
        </BrowserRouter>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
