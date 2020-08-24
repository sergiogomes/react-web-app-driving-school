import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import utilStyles from "../styles/utils.module.css";
import packageJson from "../package.json";

const email = "sergiopgomes92@gmail.com";
const subject = "React%20Driver%20ID%20on%20Purse";
const message =
  "Hello!%0D%0A%0D%0ASaw%20you%20web%20app%20Driver%20ID%20on%20Purse,%20and%20wanted%20to%20talk%20to%20you.%0D%0A%0D%0AThanks.";
const emailLink = `mailto:${email}?subject=${subject}&body=${message}`;
let version;

if (packageJson && packageJson.version) {
  version = packageJson.version;
} else {
  version = "1.0.0";
}

export default function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About</title>
      </Head>

      <div className="max-w-full rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div
            className="font-bold text-xl mb-2"
            className={utilStyles.headerContainer}
          >
            <FontAwesomeIcon icon="info-circle" />
            <div className={utilStyles.space}></div>
            <span className={utilStyles.title}>About</span>
          </div>
          <section className={utilStyles.headerImg}>
            <img
              src="/images/logo.png"
              alt="Driver ID on Purse Logo"
              className="img"
            />
          </section>
          <section className={utilStyles.headerImg}>
            <img
              src="https://wakatime.com/badge/github/sergiogomes/react-web-app-driving-school.svg"
              alt="Wakatime Integration"
              className="img"
            />
          </section>
          <section className={utilStyles.center}>
            <h3>Version: {version}</h3>
          </section>
          <p className="text-gray-700 text-base">
            <span>
              Driver ID on Purse is a system management for driving schools.
            </span>
            <br />
            <span>
              You can register all students, teachers, cars, and then gather
              them in theoretical and pratical classes.
            </span>
            <br />
            <small className={utilStyles.lightText}>
              Developed by SergioPow
            </small>
            <br />
          </p>
          <address>
            <small className={utilStyles.lightText}>
              Reach me on:
              <a href={emailLink}> sergiopgomes92@gmail.com</a>
            </small>
          </address>
        </div>
      </div>
    </React.Fragment>
  );
}
