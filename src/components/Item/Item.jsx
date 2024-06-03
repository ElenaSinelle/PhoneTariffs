import { useState } from "react";
import styles from "./Item.module.scss";

export default function Item({ id, title, tariff, traffic, theme }) {
  const [selected, setSelected] = useState(false);

  const handleSelectedState = () => {
    setSelected(!selected);
  };
  return (
    <div
      className={
        selected ? `${styles.item} ${styles.item__selected}` : `${styles.item}`
      }
      id={id}
      onClick={handleSelectedState}
    >
      <div className={`${styles.title} ${theme.title}`}>{title}</div>

      <div className={`${styles.tariff} ${theme.tariff}`}>
        <div className={styles.tariffContainer}>
          <span className={styles.sub}>руб</span>
          {tariff}
          <span className={styles.sup}>/мес</span>
        </div>
      </div>

      <div className={`${styles.traffic} ${theme.traffic}`}>
        до {traffic} Мбит/сек
      </div>

      <div className={`${styles.itemFooter} ${theme.itemFooter}`}>
        <p>Объём включённого</p>
        <p>трафика не ограничен</p>
      </div>
    </div>
  );
}
