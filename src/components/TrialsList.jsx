// src/components/TrialsList.jsx
import React from "react";

export default function TrialsList({ trials }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {trials.map((trial) => (
        <div key={trial.id} className="p-4 border rounded shadow">
          <h2 className="font-bold text-xl mb-2">{trial.title}</h2>
          <p className="text-sm text-gray-600">Phase: {trial.phase}</p>
          <p className="mt-2">{trial.description}</p>
        </div>
      ))}
    </div>
  );
}
