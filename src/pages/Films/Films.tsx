import { useState } from "react";
import { useGetFilmsQuery, useGetPeopleQuery } from "../../api/ghibliApi";
import FilmCard, { FilmCardSkeleton } from "../../components/FilmCard/FilmCard";
import PeopleTable, { PeopleTableSkeleton } from "../../components/PeopleTable/PeopleTable";
import { filmsPageText } from "../../data/dummyData";
import styles from "./Films.module.css";
import { personAppearsInFilm } from "../../utils/personAppearsInFilm";

export default function Films() {
    const { data: films, isLoading, error } = useGetFilmsQuery();

    const [selectedFilmId, setSelectedFilmId] = useState<string | null>(null);

    const {
        data: allPeople,
        isLoading: peopleLoading,
        isFetching: peopleFetching,
        error: peopleError,
    } = useGetPeopleQuery(undefined, {
        skip: !selectedFilmId,
    });

    const selectedFilm = films?.find((film) => film.id === selectedFilmId);

    const peopleForSelectedFilm =
        selectedFilmId && allPeople
            ? allPeople.filter((person) => personAppearsInFilm(person, selectedFilmId))
            : [];

    const isPeopleLoading = peopleLoading || peopleFetching;
    const hasSelectedFilm = Boolean(selectedFilmId);
    const hasPeople = peopleForSelectedFilm.length > 0;

    if (error) {
        return <p role="alert">{filmsPageText.filmsLoadError}</p>;
    }

    if (peopleError) {
        return <p role="alert">{filmsPageText.peopleLoadError}</p>;
    }

    const handleTogglePeople = (filmId: string) => {
        setSelectedFilmId((current) => (current === filmId ? null : filmId));
    };

    return (
        <section className={styles.filmsContainer} aria-label="Studio Ghibli films">
            <h1 className={styles.heading}>Films</h1>

            <ul className={styles.filmGrid} role="list">
                {isLoading || !films
                    ? Array.from({ length: 4 }).map((_, index) => (
                          <li key={index} className={styles.filmListItem}>
                              <FilmCardSkeleton />
                          </li>
                      ))
                    : films.map((film) => (
                          <li key={film.id} className={styles.filmListItem}>
                              <FilmCard
                                  {...film}
                                  onShowPeople={() => handleTogglePeople(film.id)}
                              />
                          </li>
                      ))}
            </ul>

            {hasSelectedFilm && isPeopleLoading && <PeopleTableSkeleton />}

            {hasSelectedFilm && !isPeopleLoading && !hasPeople && (
                <p className={styles.emptyPeople} role="status" aria-live="polite">
                    {filmsPageText.noPeopleFound}
                </p>
            )}

            {hasSelectedFilm && !isPeopleLoading && hasPeople && (
                <PeopleTable
                    caption={`People in ${selectedFilm?.title} Film :`}
                    people={peopleForSelectedFilm}
                />
            )}
        </section>
    );
}
