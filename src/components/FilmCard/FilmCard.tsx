import type { FilmCardProps } from "../../types/types";
import styles from "./FilmCard.module.css";

export default function FilmCard({
    title,
    release_date,
    description,
    onShowPeople,
    isExpanded,
    controlsId,
}: FilmCardProps) {
    const titleId = `film-title-${title}`;

    return (
        <article className={styles.filmCard} aria-labelledby={titleId}>
            <h3 id={titleId} className={styles.title}>
                {title}
            </h3>
            <span className={styles.releaseDate}>Release Date: {release_date}</span>
            <p className={styles.description}>{description}</p>
            <button
                type="button"
                className={styles.showPeopleButton}
                onClick={onShowPeople}
                aria-label={`Show people for ${title}`}
                aria-expanded={isExpanded}
                aria-controls={controlsId}
            >
                Show people
            </button>
        </article>
    );
}

export function FilmCardSkeleton() {
    return (
        <article className={`${styles.filmCard} ${styles.skeletonCard}`} aria-hidden="true">
            <div className={`${styles.skeletonLine} ${styles.skeletonTitle}`} />
            <div className={`${styles.skeletonLine} ${styles.skeletonMeta}`} />
            <div className={`${styles.skeletonLine} ${styles.skeletonText}`} />
            <div className={`${styles.skeletonLine} ${styles.skeletonTextWide}`} />
            <div className={`${styles.skeletonLine} ${styles.skeletonButton}`} />
        </article>
    );
}
