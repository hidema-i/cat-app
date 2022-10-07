import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Loader } from "semantic-ui-react";
import LikeButton from "./components/LikeButton";
interface SearchCatimage {
  id: string;
  url: string;
  width: number;
  height: number;
}

interface IndexPageProps {
  initialCatimageurl: string;
}

const fetchCatImage = async (): Promise<SearchCatimage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = await res.json();
  return result[0];
};

const Home: NextPage<IndexPageProps> = ({ initialCatimageurl }) => {
  const [catImageUrl, setCatimageUrl] = useState(initialCatimageurl);
  //Loading
  const [isloading, setIsLoading] = useState(false);

  const handleClick = async () => {
    //handleClickをクリックした時に（true）にする
    setIsLoading(true);
    const catImage = await fetchCatImage();
    setCatimageUrl(catImage.url);
    //handleClickで読み込めたらを（false）にする
    setIsLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>catImageApp</h1>
      {isloading ? (
        <Loader active size="huge" inline="centered" />
      ) : (
        <img src={catImageUrl} width={500} height="auto" />
      )}

      <button style={{ marginTop: 18 }} onClick={handleClick}>
        DayCat
      </button>
      <h2>👍をクリック</h2>
      <LikeButton />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  IndexPageProps
> = async () => {
  const catImage = await fetchCatImage();
  return {
    props: {
      initialCatimageurl: catImage.url,
    },
  };
};
export default Home;
