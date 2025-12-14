import type { AboutContent } from "../types/types";

export const aboutContent: AboutContent = {
    title: "About",
    paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi, porro molestiae quo, ea repellat molestias, sit exercitationem labore ratione sed perspiciatis? Non, autem sint. Non assumenda a sapiente dicta ullam adipisci reiciendis quisquam esse optio dolorem repudiandae tempora vero quibusdam quod labore beatae recusandae veniam, maiores, nam quis qui.",
};

export const filmsPageText = {
    filmsLoadError: "There was an error loading films.",
    peopleLoadError: "There was an error loading people.",
    noPeopleFound: "No people found for this film.",
};

export const peopleTableText = {
    defaultCaption: "People in Film Title:",
    rowNumberAriaLabel: "Row number",
    nameHeader: "Name",
    ageHeader: "Age",
    genderHeader: "Gender",
    eyeColorHeader: "Eye colour",
};

export const layoutText = {
    navigationHeading: "Navigation",
    mainNavigationAriaLabel: "Main navigation",
};

export const layoutNavItems = [
    { to: "/", label: "About", end: true },
    { to: "/films", label: "Films" },
];
