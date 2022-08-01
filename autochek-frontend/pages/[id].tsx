import Nav from "./Navbar";

export default function ProductDetail({ product }) {
  console.log(product);
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="item">
          <div className="product-details">
            <img src={product.imageUrl} height="300" />
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
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://api-prod.autochek.africa/v1/inventory/car/search"
  );
  const products = await res.json();
  const paths = products.result.map((product) => {
    return { params: { id: product.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
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
