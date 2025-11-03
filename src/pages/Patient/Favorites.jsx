import React from "react";
import FavoritesList from "../../components/FavoritesList";

export default function Favorites() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      <FavoritesList />
    </div>
  );
}
