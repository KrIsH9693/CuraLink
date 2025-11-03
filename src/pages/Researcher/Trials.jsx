// src/pages/Researcher/Trials.jsx
import React, { useContext } from "react";
import TrialsList from "../../components/TrialsList";
import { AppContext } from "../../context/AppContext";

export default function Trials() {
  const { trials } = useContext(AppContext);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Clinical Trials</h1>
      <TrialsList trials={trials} />
    </div>
  );
}
