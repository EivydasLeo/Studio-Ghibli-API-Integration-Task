import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <h3 className={styles.heading}>Navigation</h3>
                <nav aria-label="Main navigation">
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link className={styles.navLink} to="/">
                                About
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link className={styles.navLink} to="/films">
                                Films
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main className={styles.content}>{children}</main>
        </div>
    );
}
