import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout/layout";

const email = "sergiopgomes92@gmail.com";
const subject = "React%20Driver%20ID%20on%20Purse";
const message =
  "Hello!%0D%0A%0D%0ASaw%20you%20web%20app%20Driver%20ID%20on%20Purse,%20and%20wanted%20to%20talk%20to%20you.%0D%0A%0D%0AThanks.";
const emailLink = `mailto:${email}?subject=${subject}&body=${message}`;

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>

        <section>
          <h1 className={utilStyles.headerContainer}>
            <FontAwesomeIcon icon="info-circle" />
            <div className={utilStyles.space}></div>
            <span>About</span>
          </h1>
        </section>

        <section className={utilStyles.headerImg}>
          <img
            src="/images/logo.png"
            alt="Driver ID on Purse Logo"
            className="img"
          />
        </section>

        <section className={utilStyles.center}>
          <h3>Version: 1.0.0</h3>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <p>Driver ID on Purse is a system management for driving schools.</p>
          <p>
            You can register all students, teachers, cars, and then gather them
            in theoretical and pratical classes.
          </p>
          <small className={utilStyles.lightText}>Developed by SergioPow</small>
          <address>
            <small className={utilStyles.lightText}>
              Reach me on:
              <a href={emailLink}> sergiopgomes92@gmail.com</a>
            </small>
          </address>
        </section>
      </Layout>
    </>
  );
}
