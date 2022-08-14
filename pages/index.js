import { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import AddForm from '../components/AddForm'
import Display from '../components/Display'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [items, setItems] = useState()
  const item0 = {name:null, brand:null, caterogy:null, size:null, unit:null, price:null}
  const [item, setItem] = useState(item0)

  const url = process.env.NEXT_PUBLIC_RESOURCE_URL
  useEffect(() => {
    axios.get(url).then(e => {
      setItems(e.data.Items)
      })
  })
  
  return (
    <div>
      <Head>
        <title>gPrices 0.0</title>
        <meta name="description" content="Help each other shop smart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">gPrices!</a>
        </h1>
        <h2>Help each other shop smart</h2>
        <AddForm item={item} setItem={setItem} item0={item0} />
        {items && <Display items={items} setItem={setItem} />}
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
