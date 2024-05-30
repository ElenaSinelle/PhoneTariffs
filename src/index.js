import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./commonStyles/index.module.scss";
import App from "./components/App/App";
// import themeBlue from "./components/Item/themeBlue.module.scss";
// import themeGreen from "./components/Item/themeGreen.module.scss";
// import themePink from "./components/Item/themePink.module.scss";
// import themeGray from "./components/Item/themeGray.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
