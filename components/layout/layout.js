import Head from "next/head";
import Link from "next/link";

import Meta from "../meta/meta";
import styles from "./layout.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import DrawBar from "../draw-bar/draw-bar";

export default function Layout({ children, home }) {
  return (
    <React.Fragment>
      <Header />
      <DrawBar />
      <div className={styles.container}>
        <Head>
          <Meta />
        </Head>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
}
