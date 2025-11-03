import React from "react";

export default function Card({ title, description, extra }) {
  return (
    <div className="border rounded-lg shadow p-4 bg-white hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      {extra && <p className="mt-2 text-gray-500 text-sm">{extra}</p>}
    </div>
  );
}
