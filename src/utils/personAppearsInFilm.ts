import type { People } from "../types/types";

export function personAppearsInFilm(person: People, filmId: string): boolean {
    return person.films?.some((filmUrl) => filmUrl.includes(`/films/${filmId}`)) ?? false;
}
