import { aboutContent } from "../../data/dummyData";

export const About = () => {
    return (
        <section>
            <h1>{aboutContent.title}</h1>

            <p>{aboutContent.paragraph}</p>
        </section>
    );
};
