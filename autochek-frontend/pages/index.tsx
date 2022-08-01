import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "./Navbar";
import axios from "axios";
import Popular from "./Popular/Popular";

const baseUrl = "https://api-prod.autochek.africa/v1/inventory/car/search";

export async function getServerSideProps() {
  const res = await axios.get(baseUrl);
  const data = await res.data;

  return {
    props: {
      data,
    },
  };
}

const Home: NextPage = ({ data }: any) => {
  // console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Autochek Africa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="container col-8">
        <div className="page-content">
          <section className="products">
            {data.result.map((item, index) => (
              <>
                <div className="product-card" key={index}>
                  <div className="product-image">
                    <img src={item.imageUrl} />
                  </div>
                  <div className="product-info">
                    <h5>{item.title}</h5>
                    <h6>Ksh {item.marketplacePrice}</h6>
                    <button type="button" className="btn btn-primary">
                      View Details
                    </button>
                  </div>
                </div>
              </>
            ))}
          </section>
          <Popular />
        </div>
      </div>
    </div>
  );
};

export default Home;
