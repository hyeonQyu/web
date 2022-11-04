import Head from 'next/head';
import { ChipBarFilter } from '@components/page/home/chipBarFilter';
import { useHomePage } from '@hooks/page/home/useHomePage';
import { HomePageContext } from '@contexts/page/home/homePageContext';
import { HomeYoutubeVideoList } from '@components/page/home/youtubeVideoList/homeYoutubeVideoList';

export interface IndexProps {}

function Index(props: IndexProps) {
  const {} = props;
  const homePageContext = useHomePage({});

  return (
    <>
      <Head>
        <title>홈 - Youtube</title>
      </Head>

      <HomePageContext.Provider value={homePageContext}>
        <ChipBarFilter />
        <HomeYoutubeVideoList />
      </HomePageContext.Provider>
    </>
  );
}

export default Index;
