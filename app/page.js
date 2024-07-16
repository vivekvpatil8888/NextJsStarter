import LikeButton from "./like-button";

const Header = ({ title }) => {
    return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {
                    names.map((name) => {
                        return <li key={name}>{name}</li>
                    })
                }
            </ul>
            <LikeButton />
        </div>
    )
}