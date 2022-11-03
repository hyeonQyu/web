import Head from 'next/Head';
import { ChipBarFilter } from '@components/page/home/chipBarFilter';

export interface IndexProps {}

function Index(props: IndexProps) {
  const {} = props;

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
