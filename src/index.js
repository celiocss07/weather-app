import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./contexts/AppContext";
import "./index.css";
import MyRoutes from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <MyRoutes />
    </AppProvider>
  </React.StrictMode>
);
