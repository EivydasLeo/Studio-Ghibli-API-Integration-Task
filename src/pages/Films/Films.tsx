import { useGetFilmsQuery } from "../../api/ghibliApi";

export default function Films() {
    const { data, error, isLoading } = useGetFilmsQuery("");

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>There was an error..</p>;

    console.log(data, "data");

    return (
        <div>
            <h1>Films</h1>
            <ul>
                {data &&
                    data.map(
                        ({
                            id,
                            title,
                            description,
                        }: {
                            id: string;
                            title: string;
                            description: string;
                        }) => (
                            <li key={id}>
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <button>Show People</button>
                            </li>
                        ),
                    )}
            </ul>
        </div>
    );
}
