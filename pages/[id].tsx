// import CarMedia from "./CarMedia";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "./Navbar";

export default function ProductDetail({ product }: any) {
  const [result, setResult] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const result = await axios.get(
        `https://api-prod.autochek.africa/v1/inventory/car_media?carId=${product.id}`
      );
      console.log(product.id);
      const data = result.data;
      setResult(data.carMediaList);
      setLoading(false);
    }
    getData();
  }, [product]);

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="item">
          <div className="product-details">
            <Image
              className="img-thumbnail"
              src={product.imageUrl}
              height="500"
              width="600"
              alt={product.name}
            />
          </div>
          <div className="product-infor">
            <li>Car Name: {product.carName}</li>
            <li> Price: ksh {product.marketplacePrice}</li>
            <li>Fuel type: {product.fuelType}</li>
            <li>Year: {product.year}</li>
            <li>Engine Type: {product.engineType}</li>
            <li>Transmission: {product.transmission}</li>
            <li>State: {product.state}</li>
            <li>Sold: {product.sold ? "Sold" : "Not sold"}</li>
          </div>
        </div>
        <p className="media-title">Car Media</p>

        <div className="products">
          {result.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <Image
                  className="img-thumbnail"
                  src={item.url}
                  alt=""
                  height="900"
                  width="800"
                />
              </div>
              <div className="product-info">
                <h6>{item.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://api-prod.autochek.africa/v1/inventory/car/search"
  );
  const products = await res.json();
  const paths = products.result.map(
    (product: { id: { toString: () => any } }) => {
      return { params: { id: product.id.toString() } };
    }
  );
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context: { params: { id: any } }) {
  const res = await fetch(
    `https://api-prod.autochek.africa/v1/inventory/car/${context.params.id}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}
