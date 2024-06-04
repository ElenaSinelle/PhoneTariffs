import React from "react";
import styles from "./commonStyles/App.module.scss";
import ItemsContainer from "./components/ItemsContainer/ItemsContainer";

function App() {
  return (
    <div className={styles.appContainer}>
      <ItemsContainer />
    </div>
  );
}

export default App;
