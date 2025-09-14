import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stonebridge Homes | Summerlin</title>
        <meta name="description" content="Luxury homes in Heritage at Stonebridge, Summerlin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Stonebridge Homes</span>
        </h1>

        <p className={styles.description}>
          Discover luxury living in the Heritage at Stonebridge community in Summerlin
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Available Properties &rarr;</h2>
            <p>Browse our current listings in the Stonebridge community.</p>
          </div>

          <div className={styles.card}>
            <h2>Community Features &rarr;</h2>
            <p>Learn about the amenities and lifestyle at Stonebridge.</p>
          </div>

          <div className={styles.card}>
            <h2>Floor Plans &rarr;</h2>
            <p>Explore our available floor plans and home designs.</p>
          </div>

          <div className={styles.card}>
            <h2>Contact Us &rarr;</h2>
            <p>Schedule a tour or request more information.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Stonebridge Homes. All rights reserved.</p>
      </footer>
    </div>
  )
}
