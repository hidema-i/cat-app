import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const fetchCatImage = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await res.json();
    return result[0];
  };

  const handleClick = async () => {
    const catImage = await fetchCatImage();
    console.log(catImage);
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
      <img
        src="https://cdn2.thecatapi.com/images/e9e.jpg"
        width={500}
        height="auto"
      />
      <button style={{ marginTop: "18" }} onClick={handleClick}>
        DayCat
      </button>
    </div>
  );
};

export default Home;
