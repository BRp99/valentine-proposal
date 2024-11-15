import styles from './Buttons.module.css'
import ReactGA from 'react-ga'

interface Props {
  onYesClick: () => void
  isNoButtonVisible: boolean
  yesButtonSize: number
  messageIndex: number
  setIsNoButtonVisible: (state: boolean) => void
  setYesButtonSize: (size: number) => void
  setMessageIndex: React.Dispatch<React.SetStateAction<number>>
}

const messages = [
  'No',
  'Are you sure?',
  'Really sure?',
  'Really really really sure?',
  'Just think about it!',
  'Are you positive?',
  "If you say no I'll be very very sad",
  'Really very very sad',
  "Ok fine! I'll stop asking...",
  'Just Kidding, PLEASE!',
]

export default function Buttons({
  onYesClick,
  isNoButtonVisible,
  yesButtonSize,
  messageIndex,
  setIsNoButtonVisible,
  setYesButtonSize,
  setMessageIndex,
}: Props) {
  const handleYesClick = () => {
    ReactGA.event({
      category: 'Button Click',
      action: 'Yes',
    })
    setIsNoButtonVisible(false)
  }

  const handleNoClick = () => {
    ReactGA.event({
      category: 'Button Click',
      action: 'No',
      label: messages[messageIndex],
    })

    setYesButtonSize(yesButtonSize + 25)

    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.yes}
        style={{ fontSize: `${yesButtonSize}px` }}
        onClick={() => {
          onYesClick()
          handleYesClick()
        }}
      >
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
