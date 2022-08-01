import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "./Navbar";
import axios from "axios";
import Popular from "./Popular/Popular";
import Link from "next/link";
import { useEffect, useState } from "react";

const baseUrl = "https://api-prod.autochek.africa/v1/inventory/car/search/";

export async function getStaticProps() {
  const res = await axios.get(baseUrl);
  const data = await res.data;

  return {
    props: {
      data,
    },
  };
}

const Home: NextPage = ({ data }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Autochek Africa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container col-8">
        <Nav />
        <p className="cars-header">All Cars</p>
        <div className="page-content">
          <section className="products">
            {data.result.map((item, index) => (
              <>
                <Link href={`/${item.id}`} key={index}>
                  <div className="product-card">
                    <div className="product-image">
                      <img src={item.imageUrl} height="170" />
                    </div>
                    <div className="product-info">
                      <h5>{item.title}</h5>
                      <h6>Ksh {item.marketplacePrice}</h6>
                    </div>
                  </div>
                </Link>
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