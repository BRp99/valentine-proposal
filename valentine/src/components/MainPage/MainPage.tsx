import styles from "./MainPage.module.css"
import BearAlone from "./BearAlone/BearAlone"
import Buttons from "./Buttons/Buttons"
import Phrase from "./Phrase/Phrase"
import { useState } from "react"

export default function MainPage() {
  const [showSecondImage, setShowSecondImage] = useState(false)

  const handleYesClick = () => {
    setShowSecondImage(true)
  }

  return (
    <div className={styles.container}>
      <BearAlone showSecondImage={showSecondImage} />
      <Phrase />
      <Buttons onYesClick={handleYesClick} />
    </div>
  )
}
