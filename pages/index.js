import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DateComponent from "../components/date/date";
import Layout from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Driver ID on Purse</title>
      </Head>

      <div className="max-w-full rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div
            className="font-bold text-xl mb-2"
            className={utilStyles.headerContainer}
          >
            <FontAwesomeIcon icon="home" />
            <div className={utilStyles.space}></div>
            <span>Home</span>
          </div>
          <section className={utilStyles.headerImg}>
            <img
              src="/images/logo.png"
              alt="Driver ID on Purse Logo"
              className="img"
            />
          </section>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
