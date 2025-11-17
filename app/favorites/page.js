"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function FavPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const f = JSON.parse(localStorage.getItem("favs") || "[]");
    setItems(f);
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      {items.map((p) => (
        <div key={p.id} style={{ margin: "10px 0", padding: 20 }}>
          <Link href={`/product/${p.id}`}>
            <img src={p.image} width={150} />
            <div>{p.title}</div>
            <div>${p.price}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
