import React from "react";
import PublicationsList from "../../components/PublicationsList";

export default function Publications() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Recommended Publications</h1>
      <PublicationsList />
    </div>
  );
}
