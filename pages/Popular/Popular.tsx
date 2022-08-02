import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const baseUrl =
  "https://api.staging.myautochek.com/v1/inventory/make?popular=true";

export default function Popular() {
  const [results, setResults] = useState<any[]>([]);
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
          <ul key={index}>
            <li className="list-make"></li>&nbsp;
            <li className="list-image">
              {item.name}{" "}
              <Image
                src={item.imageUrl}
                height="70"
                width="100"
                alt={item.name}
              />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
