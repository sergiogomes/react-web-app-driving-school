import { useSelector } from "react-redux";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./footer.module.css";
import utilStyles from "../../styles/utils.module.css";

const useStore = () => {
  const menus = useSelector((state) => state.menus);
  return { menus };
};

export default function Footer() {
  const { menus } = useStore();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.subContainer}>
          <div className={styles.containerList}>
            <ul>
              <li className={styles.containerListLi}>
                <strong>Registrations</strong>
              </li>
              {menus.map((menu) => {
                if (menu.type === "registration") {
                  return (
                    <li key={`li${menu.id}`} className={styles.containerListLi}>
                      <Link href={menu.src} key={`link${menu.id}`}>
                        <button
                          key={`menu${menu.id}`}
                          className={`${styles.footerButton} ${utilStyles.buttonIcon}`}
                        >
                          <FontAwesomeIcon icon={menu.icon} />
                          <span className={utilStyles.space}></span>
                          <span key={`span${menu.id}`}>{menu.name}</span>
                        </button>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className={styles.containerList}>
            <ul>
              <li className={styles.containerListLi}>
                <strong>Services</strong>
              </li>
              {menus.map((menu) => {
                if (menu.type === "service") {
                  return (
                    <li key={`li${menu.id}`} className={styles.containerListLi}>
                      <Link href={menu.src} key={`link${menu.id}`}>
                        <button
                          key={`menu${menu.id}`}
                          className={`${styles.footerButton} ${utilStyles.buttonIcon}`}
                        >
                          <FontAwesomeIcon icon={menu.icon} />
                          <span className={utilStyles.space}></span>
                          <span key={`span${menu.id}`}>{menu.name}</span>
                        </button>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Driver ID Purse
        </div>
        <div className={styles.footerMargin}></div>
      </div>
    </footer>
  );
}
