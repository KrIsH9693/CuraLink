import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function ResearcherDashboard() {
  const { researchers, patients } = useContext(AppContext);
  const navigate = useNavigate();
  const [showPatients, setShowPatients] = useState(false);

  const researcher = researchers[0] || null;

  if (!researcher) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold mb-6">Researcher Dashboard</h1>
        <p>No researchers onboarded yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome, {researcher.name}</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Your Details</h2>
        <p>Field: {researcher.field}</p>
        <p>Institution: {researcher.institution}</p>
        <p>ORCID: {researcher.orcid}</p>
        <p>Email: {researcher.email}</p>
      </div>

      <div className="mb-6">
        <button
          onClick={() => setShowPatients(!showPatients)}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mb-4"
        >
          {showPatients ? "Hide Patients" : "View All Patients"}
        </button>

        {showPatients && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {patients.length > 0 ? (
              patients.map((patient, idx) => (
                <div
                  key={idx}
                  className="border rounded p-4 shadow hover:shadow-lg transition"
                >
                  <h2 className="text-xl font-semibold">{patient.name}</h2>
                  <p>Condition: {patient.condition}</p>
                  <p>Email: {patient.email}</p>
                  <p>Mobile: {patient.mobile}</p>
                </div>
              ))
            ) : (
              <p>No patients onboarded yet.</p>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => navigate("/researcher/collaborators")}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Collaborators
        </button>
        <button
          onClick={() => navigate("/researcher/trials")}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Clinical Trials
        </button>
        <button
          onClick={() => navigate("/researcher/forums")}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
        >
          Forums
        </button>
        <button
          onClick={() => navigate("/researcher/favorites")}
          className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
        >
          Favorites
        </button>
      </div>
    </div>
  );
}
