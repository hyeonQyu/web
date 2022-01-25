import '../styles/globals.css';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
            <style jsx global>
                {`
                    a {
                        color: white;
                    }
                `}
            </style>
        </Layout>
    );
}
