import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Films from "./Films";
import { filmsPageText } from "../../data/dummyData";

const apiMocks = vi.hoisted(() => ({
    useGetFilmsQuery: vi.fn(),
    useGetPeopleQuery: vi.fn(),
}));

vi.mock("../../api/ghibliApi", () => apiMocks);

describe("Films", () => {
    it("shows films error message", () => {
        apiMocks.useGetFilmsQuery.mockReturnValue({
            data: undefined,
            isLoading: false,
            error: new Error("fail"),
        });

        apiMocks.useGetPeopleQuery.mockReturnValue({
            data: undefined,
            isLoading: false,
            isFetching: false,
            error: undefined,
        });

        render(<Films />);
        expect(screen.getByRole("alert")).toHaveTextContent(filmsPageText.filmsLoadError);
    });

    it("renders list items while loading", () => {
        apiMocks.useGetFilmsQuery.mockReturnValue({
            data: undefined,
            isLoading: true,
            error: undefined,
        });

        apiMocks.useGetPeopleQuery.mockReturnValue({
            data: undefined,
            isLoading: false,
            isFetching: false,
            error: undefined,
        });

        render(<Films />);
        expect(screen.getAllByRole("listitem")).toHaveLength(4);
    });

    it("shows empty message when selected film has no people", () => {
        apiMocks.useGetFilmsQuery.mockReturnValue({
            data: [
                {
                    id: "film-1",
                    title: "Film One",
                    release_date: "1986",
                    description: "Desc",
                },
            ],
            isLoading: false,
            error: undefined,
        });

        apiMocks.useGetPeopleQuery.mockImplementation(
            (_arg: unknown, opts?: { skip?: boolean }) => {
                if (opts?.skip) {
                    return {
                        data: undefined,
                        isLoading: false,
                        isFetching: false,
                        error: undefined,
                    };
                }

                return {
                    data: [
                        {
                            name: "Someone",
                            age: "30",
                            gender: "N/A",
                            eye_color: "Brown",
                            films: ["https://ghibliapi.vercel.app/films/other-film"],
                        },
                    ],
                    isLoading: false,
                    isFetching: false,
                    error: undefined,
                };
            },
        );

        render(<Films />);

        fireEvent.click(screen.getByRole("button", { name: "Show people for Film One" }));
        expect(screen.getByText(filmsPageText.noPeopleFound)).toBeInTheDocument();
    });
});
