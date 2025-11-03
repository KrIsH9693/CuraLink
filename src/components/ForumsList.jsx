import React from "react";
import Card from "./Card";

export default function ForumsList({ forums }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {forums.map((forum) => (
        <Card
          key={forum.id}
          title={forum.topic}
          description={forum.content}
          extra={`By: ${forum.author}`}
        />
      ))}
    </div>
  );
}
