import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export default function Onboarding() {
  const { addPatientProfile } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    condition: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, condition, email, mobile } = formData;
    if (!name || !condition || !email || !mobile) return alert("Please fill all fields");
    addPatientProfile(formData);
    alert("Patient added successfully!");
    setFormData({ name: "", condition: "", email: "", mobile: "" });
    navigate("/patient/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Patient Onboarding</h1>
      <div className="w-80 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          name="condition"
          placeholder="Condition"
          value={formData.condition}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Complete Onboarding
        </button>
      </div>
    </div>
  );
}
