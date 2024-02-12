import styles from "./BearAlone.module.css"

export default function BearAlone() {
  const firstImageUrl = "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
  const secondImageUrl = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"

  return (
    <div className={styles.container}>
      <img className={styles.image} src="" alt="happy bear holding flowers and jumping with excitement" />
    </div>
  )
}
