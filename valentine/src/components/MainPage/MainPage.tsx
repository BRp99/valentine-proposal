import styles from "./MainPage.module.css"
import BearAlone from "./BearAlone/BearAlone"
import Buttons from "./Buttons/Buttons"
import Phrase from "./Phrase/Phrase"
import { useState, useEffect } from "react"
import ReactGA from "react-ga"

export default function MainPage() {
  const [showSecondImage, setShowSecondImage] = useState(false)

  const handleYesClick = () => {
    setShowSecondImage(true)
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      ReactGA.event({
        category: "Cursor",
        action: "Move",
        label: `X: ${event.clientX}, Y: ${event.clientY}`,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className={styles.container}>
      <BearAlone showSecondImage={showSecondImage} />
      <Phrase />
      <Buttons onYesClick={handleYesClick} />
    </div>
  )
}
