import { useState } from "react";
import { items } from "../../items";
import styles from "../styles.module.scss";
import Item from "../Item/Item";

import themeBlue from "../../commonStyles/themes/themeBlue.module.scss";
import themeGreen from "../../commonStyles/themes/themeGreen.module.scss";
import themePink from "../../commonStyles/themes/themePink.module.scss";
import themeGray from "../../commonStyles/themes/themeGray.module.scss";

const themes = [themeBlue, themeGreen, themePink, themeGray];

export default function ItemsContainer() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (id) => {
    setSelectedItemId(id);
  };

  const renderItems = () => {
    return items.map((item, index) => (
      <Item
        key={item.id}
        id={item.id}
        title={item.title}
        tariff={item.tariff}
        traffic={item.traffic}
        theme={themes[index]}
        isSelected={item.id === selectedItemId}
        onClick={() => handleItemClick(item.id)}
      />
    ));
  };

  return <div className={styles.itemsContainer}>{renderItems()}</div>;
}
