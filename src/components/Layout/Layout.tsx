import type { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { layoutNavItems, layoutText } from "../../data/dummyData";
import styles from "./Layout.module.css";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <h3 className={styles.heading}>{layoutText.navigationHeading}</h3>
                <nav aria-label={layoutText.mainNavigationAriaLabel}>
                    <ul className={styles.navList}>
                        {layoutNavItems.map((item) => (
                            <li key={item.to} className={styles.navItem}>
                                <NavLink
                                    to={item.to}
                                    end={item.to === "/"}
                                    className={({ isActive }) =>
                                        `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <main className={styles.content}>{children}</main>
        </div>
    );
}
