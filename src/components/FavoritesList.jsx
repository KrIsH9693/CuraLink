import React from "react";
import Card from "./Card";

export default function FavoritesList({ favorites }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {favorites.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          extra={item.extra}
        />
      ))}
    </div>
  );
}
