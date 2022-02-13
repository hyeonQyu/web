import Seo from '../components/Seo';
import { useEffect, useState } from 'react';

export default function Home() {
    const size = 50;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const { results } = await (await fetch('/api/movies')).json();
            setMovies(results);
        })();
    }, []);

    return (
        <>
            <Seo title={'Home'} />
            <h1>Hello</h1>
            {movies.map(({ id, original_title }) => (
                <div key={id}>
                    <h4>{original_title}</h4>
                </div>
            ))}
            <img src={'/vercel.svg'} />
            <style jsx global>{`
                h1 {
                    font-size: ${size}px;
                }
            `}</style>
        </>
    );
}
