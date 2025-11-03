import React, { useEffect, useState } from "react";
import publicationsData from "../../data/publications.json";

export default function Publications() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    setPublications(publicationsData);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Relevant Publications</h1>
      {publications.length === 0 ? (
        <p>No publications found.</p>
      ) : (
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{pub.title}</h2>
              <p className="text-gray-600 mt-2">{pub.abstract}</p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-blue-600 hover:underline"
              >
                Read Full Paper
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
