// src/pages/Researcher/Favorites.jsx
import React, { useContext } from "react";
import FavoritesList from "../../components/FavoritesList";
import { AppContext } from "../../context/AppContext";

export default function Favorites() {
  const { favorites } = useContext(AppContext);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Favorites</h1>
      <FavoritesList favorites={favorites} />
    </div>
  );
}
