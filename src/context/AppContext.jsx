// src/context/AppContext.jsx
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // 🧍 Patients
  const [patients, setPatients] = useState([]);

  // 👩‍🔬 Researchers
  const [researchers, setResearchers] = useState([]);

  // 🧠 Experts (for patients)
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

  // 🧪 Clinical Trials
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

  // 📚 Publications
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

  // 💬 Forums
  const [forums, setForums] = useState([
    {
      id: 1,
      topic: "AI in Brain Cancer Research",
      content: "Let's discuss latest AI trends in oncology research.",
      author: "Dr. Alice Smith",
    },
    {
      id: 2,
      topic: "Collaboration Opportunities",
      content: "Looking for partners for clinical trial on Glioblastoma.",
      author: "Dr. John Doe",
    },
  ]);

  // ⭐ Favorites
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Interesting Clinical Trial",
      description: "A new trial focusing on targeted therapy.",
      extra: "Phase II",
    },
    {
      id: 2,
      title: "AI Research Paper",
      description: "Deep learning approach for MRI segmentation.",
      extra: "2023 Publication",
    },
  ]);

  // 🔧 Functions to add new data dynamically
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

  const addForum = (forum) => {
    setForums((prev) => [...prev, forum]);
  };

  const addFavorite = (favorite) => {
    setFavorites((prev) => [...prev, favorite]);
  };

  return (
    <AppContext.Provider
      value={{
        // data
        patients,
        researchers,
        experts,
        trials,
        publications,
        forums,
        favorites,

        // functions
        addPatientProfile,
        addResearcherProfile,
        addExpert,
        addTrial,
        addPublication,
        addForum,
        addFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
