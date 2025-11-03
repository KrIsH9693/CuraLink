import React from "react";
import Card from "./Card";

export default function PublicationsList({ publications }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {publications.map((pub) => (
        <Card
          key={pub.id}
          title={pub.title}
          description={pub.abstract}
          extra={pub.journal}
        />
      ))}
    </div>
  );
}
