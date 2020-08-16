import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Driver ID Purse
        </div>
      </div>
    </footer>
  );
}
