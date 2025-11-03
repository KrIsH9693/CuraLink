import React from "react";
// src/pages/Patient/Experts.jsx
import ExpertsList from "../../components/ExpertsList";



export default function Experts() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Recommended Experts</h1>
      <ExpertsList />
    </div>
  );
}
