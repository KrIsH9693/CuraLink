// src/pages/Researcher/Forums.jsx
import React, { useContext } from "react";
import ForumsList from "../../components/ForumsList";
import { AppContext } from "../../context/AppContext";

export default function Forums() {
  const { forums } = useContext(AppContext);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Forums</h1>
      <ForumsList forums={forums} />
    </div>
  );
}
