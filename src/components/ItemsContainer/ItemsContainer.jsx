import { items } from "../../items";
import styles from "./ItemsContainer.module.scss";
import Item from "../Item/Item";

import themeBlue from "../Item/themeBlue.module.scss";
import themeGreen from "../Item/themeGreen.module.scss";
import themePink from "../Item/themePink.module.scss";
import themeGray from "../Item/themeGray.module.scss";

const themes = [themeBlue, themeGreen, themePink, themeGray];

export default function ItemsContainer() {
  const renderItems = () => {
    return items.map((item, index) => (
      <Item
        key={item.id}
        id={item.id}
        title={item.title}
        tariff={item.tariff}
        traffic={item.traffic}
        theme={themes[index]}
      />
    ));
  };

  return <div className={styles.itemsContainer}>{renderItems()}</div>;
}
