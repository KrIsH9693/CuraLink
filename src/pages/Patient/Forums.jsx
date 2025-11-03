import React from "react";
import ForumsList from "../../components/ForumsList";

export default function Forums() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Forums</h1>
      <ForumsList />
    </div>
  );
}
