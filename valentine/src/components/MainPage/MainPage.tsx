import styles from "./MainPage.module.css"
import BearAlone from "./BearAlone/BearAlone"
import Buttons from "./Buttons/Buttons"
import Phrase from "./Phrase/Phrase"

export default function MainPage() {
  return (
    <div className={styles.container}>
      <BearAlone />
      <Phrase />
      <Buttons />
    </div>
  )
}
