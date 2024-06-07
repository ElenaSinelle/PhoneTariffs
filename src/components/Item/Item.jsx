import styles from "../styles.module.scss";
import selectImg from "../../images/selection.svg";

export default function Item({
  id,
  title,
  tariff,
  traffic,
  theme,
  isSelected,
  handleItemClick,
}) {
  return (
    <div
      className={
        isSelected
          ? `${styles.item} ${styles.item__selected}`
          : `${styles.item}`
      }
      id={id}
      onClick={handleItemClick}
    >
      {isSelected ? (
        <div className={styles.item__selectImg}>
          <img src={selectImg} alt={selectImg} />
        </div>
      ) : (
        ""
      )}

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
