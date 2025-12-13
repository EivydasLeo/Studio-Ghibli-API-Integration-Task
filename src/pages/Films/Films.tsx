import { useState } from "react";
import { useGetFilmsQuery } from "../../api/ghibliApi";
import FilmCard, { FilmCardSkeleton } from "../../components/FilmCard/FilmCard";
import styles from "./Films.module.css";
import type { Film } from "../../types/types";

export default function Films() {
    const { data, error, isLoading } = useGetFilmsQuery("");
    const [selectedFilmId, setSelectedFilmId] = useState<string | null>(null);

    if (error) return <p role="alert">There was an error loading films.</p>;

    const handleShowPeople = (filmId: string) => {
        setSelectedFilmId(selectedFilmId === filmId ? null : filmId);
    };

    const skeletonItems = Array.from({ length: 4 });

    return (
        <section className={styles.filmsContainer} aria-label="Studio Ghibli films">
            <h1 className={styles.heading}>Films</h1>
            <ul className={styles.filmGrid} role="list" aria-label="Film list">
                {isLoading || !data
                    ? skeletonItems.map((_, index) => (
                          <li key={index} className={styles.filmListItem}>
                              <FilmCardSkeleton />
                          </li>
                      ))
                    : data.map(({ id, title, release_date, description }: Film) => (
                          <li key={id} className={styles.filmListItem}>
                              <FilmCard
                                  id={id}
                                  title={title}
                                  release_date={release_date}
                                  description={description}
                                  onShowPeople={() => handleShowPeople(id)}
                              />
                          </li>
                      ))}
            </ul>
        </section>
    );
}
