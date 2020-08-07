import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <title>{siteTitle}</title>

        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      <section className={utilStyles.headingMd}>
        <img src="/images/logo.png" alt="Driver ID on Purse Logo" className="img" />

        <h3>Read <Link href="/posts/first-post"><a>this page!</a></Link></h3>
      </section>
    </Layout>
  )
}