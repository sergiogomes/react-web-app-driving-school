import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import utilStyles from "../../styles/utils.module.css";
import styles from "./header.module.css";

const name = "Driver ID on Purse";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <button
          className={`${utilStyles.buttonIcon} ${utilStyles.colorPink}`}
          onClick={onOpenMenu}
        >
          <FontAwesomeIcon icon="bars" />
        </button>
        <div className={utilStyles.space}></div>
        <Link href="/">
          <a>
            <img
              src="/images/logo.png"
              className={styles.headerImage}
              alt={name}
            />
          </a>
        </Link>
      </div>
    </header>
  );
}

export function onOpenMenu() {
  console.log("Open menu!");
}
