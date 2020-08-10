import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import utilStyles from "../../styles/utils.module.css";
import styles from "./draw-bar.module.css";

const name = "Driver ID on Purse";

const useStore = () => {
  const menus = useSelector((state) => state.menus);
  const isDrawBarOpened = useSelector((state) => state.isDrawBarOpened);
  const dispatch = useDispatch();
  const onHandleDrawBar = () => dispatch({ type: "HANDLE_DRAW_BAR" });
  return { menus, isDrawBarOpened, onHandleDrawBar };
};

export default function DrawBar() {
  const { menus, isDrawBarOpened, onHandleDrawBar } = useStore();
  return (
    <div>
      <div
        className={
          isDrawBarOpened
            ? `${styles.navigationDrawer} ${styles.opened}`
            : `${styles.navigationDrawer} ${styles.closed}`
        }
      >
        <div className={utilStyles.closeContainer}>
          <button
            onClick={onHandleDrawBar}
            className={`
              ${utilStyles.buttonClose}
              ${utilStyles.buttonIcon}
              ${utilStyles.colorPink}
            `}
          >
            <FontAwesomeIcon icon="times" />
          </button>
        </div>
        <Link href="/">
          <a>
            <img
              src="/images/logo.png"
              className={styles.headerImage}
              alt={name}
            />
          </a>
        </Link>
        {menus.map((menu) => (
          <Link href={menu.src} key={`link${menu.id}`}>
            <button
              key={`menu${menu.id}`}
              className={`
              ${utilStyles.buttonIcon}
              ${styles.itemMenu}
              ${menu.color}
            `}
            >
              <div className={utilStyles.space2}></div>
              <FontAwesomeIcon icon={menu.icon} />
              <div className={utilStyles.space2}></div>
              <span>{menu.name}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
