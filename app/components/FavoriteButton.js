"use client";
import { useEffect, useState } from "react";

export default function FavoriteButton({ product }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFav(favs.some((item) => item.id === product.id));
  }, [product.id]);

  const toggleFavorite = () => {
    let favs = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFav) {
      favs = favs.filter((item) => item.id !== product.id);
    } else {
      favs.push(product);
    }

    localStorage.setItem("favorites", JSON.stringify(favs));
    setIsFav(!isFav);
  };

  return (
    <button
      onClick={toggleFavorite}
      style={{
        marginTop: 10,
        padding: "8px 12px",
        background: isFav ? "gold" : "#ddd",
        borderRadius: 6,
      }}
    >
      {isFav ? "★ Favorited" : "☆ Add Favorite"}
    </button>
  );
}
