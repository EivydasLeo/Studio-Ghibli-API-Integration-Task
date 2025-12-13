export interface AboutContent {
    title: string;
    paragraph: string;
}

export interface Film {
    id: string;
    title: string;
    release_date: string;
    description: string;
}

export interface FilmCardProps extends Film {
    onShowPeople: () => void;
}
