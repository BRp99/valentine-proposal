import MainPage from "../MainPage/MainPage"
import { useState, useEffect } from "react"
import styles from "./App.module.css"

export default function App() {
  const [showProject, setShowProject] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const currentDate = new Date()
    const targetDate = new Date("2024-02-13T24:00:00")

    if (currentDate >= targetDate) {
      setShowProject(true)
    } else {
      const timeDiff = targetDate.getTime() - currentDate.getTime()
      const secondsRemaining = Math.floor(timeDiff / 1000)

      setTimeRemaining(calculateTimeRemaining(secondsRemaining))

      const intervalId = setInterval(() => {
        const now = new Date()
        const secondsRemaining = Math.floor((targetDate.getTime() - now.getTime()) / 1000)

        setTimeRemaining(calculateTimeRemaining(secondsRemaining))

        if (now >= targetDate) {
          setShowProject(true)
          clearInterval(intervalId)
        }
      }, 1000)
    }
  }, [])

  const calculateTimeRemaining = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return { hours, minutes, seconds: remainingSeconds }
  }

  return (
    <div>
      {showProject ? (
        <MainPage />
      ) : (
        <div className={styles.container_countdown}>
          <h1 className={styles.title}> Valentine Proposal</h1>
          <div className={styles.watch}>
            <div>{timeRemaining.hours}</div>

            <div>{timeRemaining.minutes}</div>
            <div>{timeRemaining.seconds}</div>
          </div>
          <div className={styles.watch_informations}>
            <div>Hours</div>

            <div>Minutes</div>
            <div>Seconds</div>
          </div>
        </div>
      )}
    </div>
  )
}
