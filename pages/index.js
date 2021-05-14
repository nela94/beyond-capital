import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beyond Capital</title>
        <meta name="building info" content="promo Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <p className={styles.mainTitle}>Beyond Capital</p>
      </div>
    </div>
  )
}
