import { describe, expect, it } from "vitest";
import type { People } from "../types/types";
import { personAppearsInFilm } from "./personAppearsInFilm";

describe("personAppearsInFilm", () => {
    it("returns false if person has no films", () => {
        const person: People = {
            name: "Test",
            age: "10",
            gender: "N/A",
            eye_color: "Blue",
        };

        expect(personAppearsInFilm(person, "film-1")).toBe(false);
    });

    it("returns true if the film id is inside the film url", () => {
        const person: People = {
            name: "Test",
            age: "10",
            gender: "N/A",
            eye_color: "Blue",
            films: ["https://ghibliapi.vercel.app/films/film-1"],
        };

        expect(personAppearsInFilm(person, "film-1")).toBe(true);
    });
});
