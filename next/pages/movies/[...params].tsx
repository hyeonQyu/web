import { useRouter } from 'next/router';

export default function Detail({ params }) {
    const router = useRouter();

    // router 사용 시 프론트에서만 실행
    // const [title, id] = router.query.params || [];

    // 서버에서 실행하는 방법
    const [title, id] = params || [];

    console.log(router);
    return <h4>{title}</h4>;
}

export function getServerSideProps({ query: { params } }) {
    return {
        props: { params },
    };
}
