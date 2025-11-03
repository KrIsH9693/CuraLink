// src/context/AppContext.jsx
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Patients
  const [patients, setPatients] = useState([]);
  // Researchers
  const [researchers, setResearchers] = useState([]);
  // Experts (for patients)
  const [experts, setExperts] = useState([
    {
      name: "Dr. Alice Smith",
      institution: "Harvard Medical School",
      specialty: "Glioblastoma",
      publications: ["Paper 1", "Paper 2"],
      email: "alice@example.com",
    },
    {
      name: "Dr. John Doe",
      institution: "Stanford University",
      specialty: "Brain Cancer",
      publications: ["Paper A", "Paper B"],
      email: "",
    },
  ]);
  // Clinical Trials
  const [trials, setTrials] = useState([
    {
      title: "Brain Cancer Trial Phase 1",
      phase: "Recruiting",
      contact: "trial1@example.com",
    },
    {
      title: "Glioblastoma Study Phase 2",
      phase: "Completed",
      contact: "trial2@example.com",
    },
  ]);
  // Publications
  const [publications, setPublications] = useState([
    {
      title: "AI in Brain Cancer",
      abstract: "This paper discusses...",
      summary: "Simple AI-generated summary here.",
      link: "https://example.com/paper1",
    },
    {
      title: "Glioblastoma Research",
      abstract: "Abstract text...",
      summary: "AI summary here.",
      link: "https://example.com/paper2",
    },
  ]);

  // Functions to add new data dynamically
  const addPatientProfile = (patient) => {
    setPatients((prev) => [...prev, patient]);
  };

  const addResearcherProfile = (researcher) => {
    setResearchers((prev) => [...prev, researcher]);
  };

  const addExpert = (expert) => {
    setExperts((prev) => [...prev, expert]);
  };

  const addTrial = (trial) => {
    setTrials((prev) => [...prev, trial]);
  };

  const addPublication = (publication) => {
    setPublications((prev) => [...prev, publication]);
  };

  return (
    <AppContext.Provider
      value={{
        patients,
        researchers,
        experts,
        trials,
        publications,
        addPatientProfile,
        addResearcherProfile,
        addExpert,
        addTrial,
        addPublication,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
