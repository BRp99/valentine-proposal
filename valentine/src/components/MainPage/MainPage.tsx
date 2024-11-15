import styles from './MainPage.module.css'
import BearAlone from './BearAlone/BearAlone'
import Buttons from './Buttons/Buttons'
import Phrase from './Phrase/Phrase'
import { useState, useEffect } from 'react'
import ReactGA from 'react-ga'

export default function MainPage() {
  const [showSecondImage, setShowSecondImage] = useState(false)
  const [showTryAgainButton, setShowTryAgainButton] = useState(false)
  const [isNoButtonVisible, setIsNoButtonVisible] = useState(true)
  const [yesButtonSize, setYesButtonSize] = useState(15)
  const [messageIndex, setMessageIndex] = useState(0)
  const [showPhrase, setShowPhrase] = useState(true)
  const [showYesButton, setShowYesButton] = useState(true)

  const handleYesClick = () => {
    setShowSecondImage(true)
    setShowTryAgainButton(true)
    setShowPhrase(false)
    setShowYesButton(false)
  }

  const handleTryAgainClick = () => {
    setShowSecondImage(false)
    setShowTryAgainButton(false)
    setIsNoButtonVisible(true)
    setYesButtonSize(15)
    setMessageIndex(0)
    setShowPhrase(true)
    setShowYesButton(true)
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      ReactGA.event({
        category: 'Cursor',
        action: 'Move',
        label: `X: ${event.clientX}, Y: ${event.clientY}`,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className={styles.container}>
      <BearAlone showSecondImage={showSecondImage} />
      {showPhrase && <Phrase />}
      {showYesButton && (
        <Buttons
          onYesClick={handleYesClick}
          isNoButtonVisible={isNoButtonVisible}
          yesButtonSize={yesButtonSize}
          messageIndex={messageIndex}
          setIsNoButtonVisible={setIsNoButtonVisible}
          setYesButtonSize={setYesButtonSize}
          setMessageIndex={setMessageIndex}
        />
      )}
      {showTryAgainButton && (
        <button className={styles.tryAgain} onClick={handleTryAgainClick}>
          Try Again
        </button>
      )}
    </div>
  )
}
