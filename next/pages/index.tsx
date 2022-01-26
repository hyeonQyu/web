import Seo from '../components/Seo';
import { useEffect, useState } from 'react';

const API_KEY = 'f342ac37edf90b21abb778c688c856d9';

export default function Home() {
    const size = 50;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
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
