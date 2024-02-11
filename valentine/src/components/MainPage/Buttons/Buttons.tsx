import styles from "./Buttons.module.css"
import { useState } from "react"

interface Props {
  onYesClick: () => void
}

export default function Buttons({ onYesClick }: Props) {
  const [showNoButton, setShowNoButton] = useState(true)

  const [noText, setNoText] = useState("No")
  const [yesSize, setYesSize] = useState(1)

  const handleNoClick = () => {
    switch (noText) {
      case "No":
        setNoText("Are you sure?")
        setYesSize(2)
        break
      case "Are you sure?":
        setNoText("Really sure?")
        setYesSize(2.5)
        break
      case "Really sure?":
        setNoText("Really really sure?")
        setYesSize(3)
        break
      case "Really really sure?":
        setNoText("Really realy really sure?")
        setYesSize(3.5)
        break
      case "Really realy really sure?":
        setNoText("Are you positive?")
        setYesSize(4)
        break
      case "Are you positive?":
        setNoText("Just think about it")
        setYesSize(4.5)
        break
      case "Just think about it":
        setNoText("If you say no I'll be very very sad")
        setYesSize(5)
        break
      case "If you say no I'll be very very sad":
        setNoText("Really very very sad")
        setYesSize(5.5)
        break
      case "Really very very sad":
        setNoText("OK fine! I'll stop asking")
        setYesSize(6)
        break
      case "OK fine! I'll stop asking":
        setNoText("Just Kidding, PLEASEEE!")
        setYesSize(6.5)
        break
      default:
        break
    }
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.yes}
        onClick={() => {
          onYesClick()
          setNoText("Yes")
        }}
        style={{ fontSize: `${yesSize}rem` }}
      >
        Yes
      </button>
      <button className={styles.no} onClick={handleNoClick}>
        {noText}
      </button>
    </div>
  )
}
