import Seo from '../components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
    const router = useRouter();
    // 아래 Link에서 한 방식과 같은 동작
    const onClick = (id, title) => {
        router.push(
            {
                pathname: `/movies/${id}`,
                query: {
                    title,
                },
            },
            `/movies/${id}`,
        );
    };
    const size = 50;

    return (
        <>
            <Seo title={'Home'} />
            <h1>Hello</h1>
            {results.map(({ id, original_title }) => (
                <Link
                    href={{
                        pathname: `/movies/${id}`,
                        query: {
                            title: original_title,
                        },
                    }}
                    as={`/movies/${id}`}
                    key={id}
                >
                    <div>
                        <h4>{original_title}</h4>
                    </div>
                </Link>
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
