// src/pages/Researcher/Collaborators.jsx
import React, { useContext } from "react";
import CollaboratorsList from "../../components/ExpertsList"; // ya CollaboratorsList.jsx agar alag bnaoge
import { AppContext } from "../../context/AppContext";

export default function Collaborators() {
  const { collaborators } = useContext(AppContext);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Find Collaborators</h1>
      <p className="mb-6">Connect with researchers in your field.</p>
      <CollaboratorsList collaborators={collaborators} />
    </div>
  );
}
