import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!role) return alert("Please select a role!");
    if (role === "patient") navigate("/patient/onboarding");
    else if (role === "researcher") navigate("/researcher/onboarding");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to CuraLink
      </h1>

      <p className="mb-4 text-center text-gray-700">
        Choose your role and your area of interest
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <button
          className={`px-6 py-3 rounded-md font-semibold border ${
            role === "patient" ? "bg-blue-500 text-white" : "bg-white"
          }`}
          onClick={() => setRole("patient")}
        >
          Patient
        </button>
        <button
          className={`px-6 py-3 rounded-md font-semibold border ${
            role === "researcher" ? "bg-green-500 text-white" : "bg-white"
          }`}
          onClick={() => setRole("researcher")}
        >
          Researcher
        </button>
      </div>

      <input
        type="text"
        placeholder="Your area of interest (e.g., Brain Cancer)"
        className="mt-6 px-4 py-2 border rounded-md w-full md:w-96"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />

      <button
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
}
