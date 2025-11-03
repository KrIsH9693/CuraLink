// src/pages/Researcher/Onboarding.jsx
import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Onboarding() {
  const { addResearcherProfile } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    field: "",
    orcid: "",
    institution: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addResearcherProfile(formData);
    alert("Profile created successfully!");
    setFormData({
      name: "",
      field: "",
      orcid: "",
      institution: "",
      email: "",
    });
  };

  return (
    <div className="container mx-auto py-10 max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Researcher Onboarding</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Field of Research</label>
          <input
            type="text"
            name="field"
            value={formData.field}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">ORCID ID</label>
          <input
            type="text"
            name="orcid"
            value={formData.orcid}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Institution</label>
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
}
