import Head from 'next/Head';
import { ChipBarFilter } from '@components/page/home/chipBarFilter';
import { useHomePage } from '@hooks/page/home/useHomePage';

export interface IndexProps {}

function Index(props: IndexProps) {
  const {} = props;
  const {} = useHomePage({});

  return (
    <>
      <Head>
        <title>홈 - Youtube</title>
      </Head>

      <>
        <ChipBarFilter />
      </>
    </>
  );
}

export default Index;
