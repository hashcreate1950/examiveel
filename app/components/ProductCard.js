"use client";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 15,
        borderRadius: 10,
      }}
    >
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: 200, objectFit: "contain" }}
        />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </Link>

      <FavoriteButton product={product} />
    </div>
  );
}
