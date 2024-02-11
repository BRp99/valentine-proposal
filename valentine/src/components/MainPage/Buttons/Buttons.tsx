import styles from "./Buttons.module.css"

export default function Buttons() {
  return (
    <div className={styles.container}>
      <button className={styles.yes}>Yes</button>
      <button className={styles.no}>No</button>
    </div>
  )
}
