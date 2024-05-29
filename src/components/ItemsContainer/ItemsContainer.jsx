import { items } from "../../items";
import styles from "./ItemsContainer.module.scss";
import Item from "../Item/Item";

export default function ItemsContainer() {
  const renderItems = () => {
    return items.map((item) => (
      <Item
        key={item.id}
        id={item.id}
        title={item.title}
        tariff={item.tariff}
        traffic={item.traffic}
      />
    ));
  };

  return <div className={styles.itemsContainer}>{renderItems()}</div>;
}
