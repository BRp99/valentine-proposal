import styles from "./BearAlone.module.css"

interface Props {
  showSecondImage: boolean
}

export default function BearAlone({ showSecondImage }: Props) {
  const firstImageUrl = "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
  const secondImageUrl = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={showSecondImage ? secondImageUrl : firstImageUrl}
        alt="happy bear holding flowers and jumping with excitement"
      />
    </div>
  )
}
