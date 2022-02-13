import Seo from '../components/Seo';
import { useEffect, useState } from 'react';

export default function Home({ results }) {
    const size = 50;

    return (
        <>
            <Seo title={'Home'} />
            <h1>Hello</h1>
            {results.map(({ id, original_title }) => (
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

export async function getServerSideProps() {
    const { results } = await (await fetch('http://localhost:3000/api/movies')).json();
    return {
        props: {
            results,
        },
    };
}
