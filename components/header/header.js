import Link from "next/link";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import utilStyles from "../../styles/utils.module.css";
import styles from "./header.module.css";

const name = "Driver ID on Purse";

const useStore = () => {
  const dispatch = useDispatch();
  const onHandleDrawBar = () => dispatch({ type: "HANDLE_DRAW_BAR" });
  return { onHandleDrawBar };
};

export default function Header() {
  const { onHandleDrawBar } = useStore();
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <button
          onClick={onHandleDrawBar}
          className={`${utilStyles.buttonIcon} ${utilStyles.colorPink}`}
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
