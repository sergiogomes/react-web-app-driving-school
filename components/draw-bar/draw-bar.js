import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import utilStyles from "../../styles/utils.module.css";
import styles from "./draw-bar.module.css";

const name = "Driver ID on Purse";
const menus = [
  {
    id: 1,
    icon: "power-off",
    name: "Logout",
    src: "/",
    color: utilStyles.colorDanger,
  },
  { id: 2, icon: "home", name: "Home", src: "/", color: utilStyles.colorGray },
  {
    id: 3,
    icon: "chalkboard-teacher",
    name: "Theoretical Class",
    src: "/",
    color: utilStyles.colorGray,
  },
  {
    id: 4,
    icon: "car-crash",
    name: "Pratical Class",
    src: "/",
    color: utilStyles.colorGray,
  },
  {
    id: 5,
    icon: "user-graduate",
    name: "Students",
    src: "/",
    color: utilStyles.colorGray,
  },
  {
    id: 6,
    icon: "user-tie",
    name: "Teachers",
    src: "/",
    color: utilStyles.colorGray,
  },
  { id: 7, icon: "car", name: "Cars", src: "/", color: utilStyles.colorGray },
  {
    id: 8,
    icon: "info-circle",
    name: "About",
    src: "/",
    color: utilStyles.colorGray,
  },
];

const useStore = () => {
  const isDrawBarOpened = useSelector((state) => state.isDrawBarOpened);
  const dispatch = useDispatch();
  const onHandleDrawBar = () => dispatch({ type: "HANDLE_DRAW_BAR" });
  return { isDrawBarOpened, onHandleDrawBar };
};

export default function DrawBar() {
  const { isDrawBarOpened, onHandleDrawBar } = useStore();
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
              <div className={utilStyles.space}></div>
              <FontAwesomeIcon icon={menu.icon} />
              <div className={utilStyles.space}></div>
              <span>{menu.name}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
