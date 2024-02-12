import styles from "./Buttons.module.css"
import { useState } from "react"

const messages = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Really really really sure?",
  "Just think about it!",
  "Are you positive?",
  "If you say no I'll be very very sad",
  "Really very very sad",
  "Ok fine! I'll stop asking...",
  "Just Kidding, PLEASE!",
]

export default function Buttons() {
  const [isNoButtonVisible, setIsNoButtonVisible] = useState(true)

  const [yesButtonSize, setYesButtonSize] = useState(15)

  const [messageIndex, setMessageIndex] = useState(0)

  const handleYesClick = () => {
    setIsNoButtonVisible(false)
  }

  const handleNoClick = () => {
    setYesButtonSize(yesButtonSize + 25)

    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
  }

  return (
    <div className={styles.container}>
      <button className={styles.yes} style={{ fontSize: `${yesButtonSize}px` }} onClick={handleYesClick}>
        Yes
      </button>

      {isNoButtonVisible && (
        <button className={styles.no} onClick={handleNoClick}>
          {messages[messageIndex]}
        </button>
      )}
    </div>
  )
}
