export default function Home() {
    const size = 50;

    return (
        <>
            <h1>Hello</h1>
            <style jsx global>{`
                h1 {
                    font-size: ${size}px;
                }
            `}</style>
        </>
    );
}
