"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then(setItems);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {items.map((p) => (
        <div
          key={p.id}
          style={{ border: "1px solid #ccc", margin: "10px 0", padding: 10 }}
        >
          <Link href={`/product/${p.id}`}>
            <img src={p.image} width={120} />
            <div>{p.title}</div>
            <div>${p.price}</div>
          </Link>
          <FavButton product={p} />
        </div>
      ))}
    </div>
  );
}

function FavButton({ product }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const f = JSON.parse(localStorage.getItem("favs") || "[]");
    setFav(f.some((i) => i.id === product.id));
  }, [product.id]);

  const toggle = () => {
    let f = JSON.parse(localStorage.getItem("favs") || "[]");
    if (fav) f = f.filter((i) => i.id !== product.id);
    else f.push(product);
    localStorage.setItem("favs", JSON.stringify(f));
    setFav(!fav);
  };

  return <button onClick={toggle}>{fav ? "★" : "☆"}</button>;
}
