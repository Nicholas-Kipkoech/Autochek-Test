import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl =
  "https://api.staging.myautochek.com/v1/inventory/make?popular=true";

export default function Popular() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const api = async () => {
      const data = await fetch(baseUrl);
      const jsonData = await data.json();
      setResults(jsonData.makeList);
    };
    api();
  });
  return (
    <div className="container">
      <p className="popular-title">Popular make</p>
      <div className="items-make">
        {results.map((item, index) => (
          <ul>
            <li className="list-make" key={index}></li>&nbsp;
            <li className="list-image">
              {item.name} <img src={item.imageUrl} height="70" />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
