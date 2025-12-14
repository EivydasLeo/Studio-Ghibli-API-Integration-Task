import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Layout from "./Layout";
import { layoutNavItems, layoutText } from "../../data/dummyData";

describe("Layout", () => {
    it("renders navigation and children", () => {
        render(
            <MemoryRouter>
                <Layout>
                    <div>Page content</div>
                </Layout>
            </MemoryRouter>,
        );

        expect(screen.getByText(layoutText.navigationHeading)).toBeInTheDocument();
        expect(screen.getByText("Page content")).toBeInTheDocument();

        for (const item of layoutNavItems) {
            expect(screen.getByRole("link", { name: item.label })).toBeInTheDocument();
        }
    });
});
