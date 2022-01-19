import NavBar from '../components/NavBar';

export default function Home() {
    const size = 50;

    return (
        <>
            <NavBar />
            <h1>Hello</h1>
            <style jsx>{`
                h1 {
                    font-size: ${size}px;
                }
            `}</style>
        </>
    );
}
