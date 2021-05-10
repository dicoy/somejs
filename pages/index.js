import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>eceme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello human!
        </h1>

        <p className={styles.description}>
          What's up?
        </p>

      </main>

      <footer className={styles.footer}>
        <input />
      </footer>
    </div>
  )
}
