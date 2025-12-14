import type { People } from "../../types/types";
import { peopleTableText } from "../../data/dummyData";
import styles from "./PeopleTable.module.css";

export default function PeopleTable({
    people,
    caption = peopleTableText.defaultCaption,
}: {
    people: People[];
    caption?: string;
}) {
    return (
        <div className={styles.tableWrap}>
            <table className={styles.table}>
                <caption className={styles.caption}>{caption}</caption>

                <thead>
                    <tr>
                        <th
                            className={`${styles.th} ${styles.indexHeader}`}
                            aria-label={peopleTableText.rowNumberAriaLabel}
                        />
                        <th className={styles.th}>{peopleTableText.nameHeader}</th>
                        <th className={styles.th}>{peopleTableText.ageHeader}</th>
                        <th className={styles.th}>{peopleTableText.genderHeader}</th>
                        <th className={styles.th}>{peopleTableText.eyeColorHeader}</th>
                    </tr>
                </thead>

                <tbody>
                    {people.map(({ name, age, gender, eye_color }, index) => (
                        <tr key={`${name}-${index}`}>
                            <td className={`${styles.td} ${styles.indexCell}`}>{index + 1}.</td>
                            <td className={styles.td}>{name}</td>
                            <td className={styles.td}>{age}</td>
                            <td className={styles.td}>{gender}</td>
                            <td className={styles.td}>{eye_color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export function PeopleTableSkeleton({
    rows = 4,
    caption = peopleTableText.defaultCaption,
}: {
    rows?: number;
    caption?: string;
}) {
    const items = Array.from({ length: rows });

    return (
        <div className={styles.tableWrap} aria-hidden="true">
            <table className={`${styles.table} ${styles.skeletonTable}`}>
                <caption className={styles.caption}>{caption}</caption>

                <thead>
                    <tr>
                        <th
                            className={`${styles.th} ${styles.indexHeader}`}
                            aria-label={peopleTableText.rowNumberAriaLabel}
                        />
                        <th className={styles.th}>{peopleTableText.nameHeader}</th>
                        <th className={styles.th}>{peopleTableText.ageHeader}</th>
                        <th className={styles.th}>{peopleTableText.genderHeader}</th>
                        <th className={styles.th}>{peopleTableText.eyeColorHeader}</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((_, index) => (
                        <tr key={index}>
                            <td className={`${styles.td} ${styles.indexCell}`}>{index + 1}</td>
                            <td className={styles.td}>
                                <div className={`${styles.skeletonLine} ${styles.skeletonName}`} />
                            </td>
                            <td className={styles.td}>
                                <div className={`${styles.skeletonLine} ${styles.skeletonAge}`} />
                            </td>
                            <td className={styles.td}>
                                <div
                                    className={`${styles.skeletonLine} ${styles.skeletonGender}`}
                                />
                            </td>
                            <td className={styles.td}>
                                <div className={`${styles.skeletonLine} ${styles.skeletonEye}`} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
