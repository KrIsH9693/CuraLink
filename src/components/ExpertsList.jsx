// src/components/ExpertsList.jsx
import React, { useEffect, useState } from "react";
import Card from "./Card";
import expertsData from "../data/experts.json";

export default function ExpertsList() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    // Normally ye API call hoti, abhi hum static JSON se data le rahe hain
    setExperts(expertsData);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {experts.length > 0 ? (
        experts.map((expert) => (
          <Card
            key={expert.id}
            title={expert.name}
            description={`${expert.specialty} — ${expert.institution}`}
            extra={`📍 ${expert.location} • ✉️ ${expert.email}`}
          />
        ))
      ) : (
        <p>No experts found.</p>
      )}
    </div>
  );
}
