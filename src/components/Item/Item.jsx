import styles from "./Item.module.scss";

export default function Item({ id, title, tariff, traffic }) {
  return (
    <div className={styles.item} id={id}>
      <div className={styles.title}>{title}</div>

      <div className={styles.tariff}>
        <span className={styles.sub}>руб</span>
        {tariff}
        <span className={styles.sup}>/мес</span>
      </div>

      <div className={styles.traffic}>до {traffic} Мбит/сек</div>

      <div className={styles.itemFooter}>
        <p>Объём включённого</p>
        <p>трафика не ограничен</p>
      </div>
    </div>
  );
}
