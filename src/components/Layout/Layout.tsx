import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <Link to="/">About</Link>
                <Link to="/films">Films</Link>
            </aside>

            <main className={styles.content}>{children}</main>
        </div>
    );
}
