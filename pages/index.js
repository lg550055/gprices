import { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Display from '../components/Display'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [items, setItems] = useState()
  const url = 'https://q3w9rey5g0.execute-api.us-east-2.amazonaws.com/items'
  useEffect(() => {
    axios.get(url).then(e => {
      // console.log(e.data.Items);
      setItems(e.data.Items)
      })
  })
  // console.log(items)
  return (
    <div className={styles.container}>
      <Head>
        <title>gPrices 0.0</title>
        <meta name="description" content="Help each other shop smart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">gPrices!</a>
        </h1>

        <p className={styles.description}>
          Help each other shop smart
        </p>
        {items && <Display items={items}/>}
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
