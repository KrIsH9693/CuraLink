// src/pages/Patient/Dashboard.jsx
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

export default function Dashboard() {
  const { patients, experts, trials, publications } = useContext(AppContext);
  const [searchExpert, setSearchExpert] = useState("");
  const [searchTrial, setSearchTrial] = useState("");

  // Filtered lists
  const filteredExperts = experts.filter((e) =>
    e.specialty.toLowerCase().includes(searchExpert.toLowerCase())
  );

  const filteredTrials = trials.filter((t) =>
    t.title.toLowerCase().includes(searchTrial.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Patient Dashboard</h1>

      {/* Patients */}
      <h2 className="text-2xl font-semibold mb-4">Patients Onboarded</h2>
      {patients.length === 0 ? (
        <p>No patients onboarded yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {patients.map((patient, index) => (
            <div
              key={index}
              className="border rounded p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{patient.name}</h3>
              <p>Condition: {patient.condition}</p>
              <p>Email: {patient.email}</p>
              <p>Mobile: {patient.mobile}</p>
            </div>
          ))}
        </div>
      )}

      {/* Experts */}
      <h2 className="text-2xl font-semibold mb-2">Experts</h2>
      <input
        type="text"
        placeholder="Search expert by specialty"
        value={searchExpert}
        onChange={(e) => setSearchExpert(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {filteredExperts.map((expert, index) => (
          <div
            key={index}
            className="border rounded p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{expert.name}</h3>
            <p>Institution: {expert.institution}</p>
            <p>Specialty: {expert.specialty}</p>
            <p>Email: {expert.email || "Not public"}</p>
            <p>Publications: {expert.publications.join(", ")}</p>
          </div>
        ))}
      </div>

      {/* Trials */}
      <h2 className="text-2xl font-semibold mb-2">Clinical Trials</h2>
      <input
        type="text"
        placeholder="Search trial by title"
        value={searchTrial}
        onChange={(e) => setSearchTrial(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {filteredTrials.map((trial, index) => (
          <div
            key={index}
            className="border rounded p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{trial.title}</h3>
            <p>Phase: {trial.phase}</p>
            <p>Contact: {trial.contact}</p>
          </div>
        ))}
      </div>

      {/* Publications */}
      <h2 className="text-2xl font-semibold mb-2">Publications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="border rounded p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{pub.title}</h3>
            <p>Summary: {pub.summary}</p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Read full paper
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
