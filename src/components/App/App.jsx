import React from "react";
import styles from "./App.module.scss";
import ItemsContainer from "../ItemsContainer/ItemsContainer";

function App() {
  return (
    <div className={styles.appContainer}>
      <ItemsContainer />
    </div>
  );
}

export default App;
