import Seo from '../components/Seo';

export default function Home() {
    const size = 50;

    return (
        <>
            <Seo title={'Home'} />
            <h1>Hello</h1>
            <style jsx global>{`
                h1 {
                    font-size: ${size}px;
                }
            `}</style>
        </>
    );
}
