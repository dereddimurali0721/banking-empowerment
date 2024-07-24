import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import preErrorPage from "./assets/loaders/preErrorPage.gif";
import gearImage from "./assets/loaders/prePageLoader.svg";

import "./index.css";
import { ErrorBoundary } from "react-error-boundary";

const BootStrap = lazy(() => import("./BootStrap"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={
        <div className="errorOrLoading">
          <img src={preErrorPage} />
          <h1>
            Something went wrong. We are working on that. please come back
            later.
          </h1>
        </div>
      }
    >
      <Suspense
        fallback={
          <div className="errorOrLoading">
            <img src={gearImage} width={300} height={300} />
            <h1>Please wait 😊</h1>
          </div>
        }
      >
        <BootStrap />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
