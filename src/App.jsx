import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

// Patient Pages
import PatientOnboarding from "./pages/Patient/Onboarding";
import PatientDashboard from "./pages/Patient/Dashboard";
import PatientExperts from "./pages/Patient/Experts";
import PatientTrials from "./pages/Patient/Trials";
import PatientPublications from "./pages/Patient/Publications";
import PatientForums from "./pages/Patient/Forums";
import PatientFavorites from "./pages/Patient/Favorites";

// Researcher Pages
import ResearcherOnboarding from "./pages/Researcher/Onboarding";
import ResearcherDashboard from "./pages/Researcher/Dashboard";
import ResearcherCollaborators from "./pages/Researcher/Collaborators";
import ResearcherTrials from "./pages/Researcher/Trials";
import ResearcherForums from "./pages/Researcher/Forums";
import ResearcherFavorites from "./pages/Researcher/Favorites";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Patient Routes */}
        <Route path="/patient/onboarding" element={<PatientOnboarding />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/experts" element={<PatientExperts />} />
        <Route path="/patient/trials" element={<PatientTrials />} />
        <Route path="/patient/publications" element={<PatientPublications />} />
        <Route path="/patient/forums" element={<PatientForums />} />
        <Route path="/patient/favorites" element={<PatientFavorites />} />

        {/* Researcher Routes */}
        <Route path="/researcher/onboarding" element={<ResearcherOnboarding />} />
        <Route path="/researcher/dashboard" element={<ResearcherDashboard />} />
        <Route path="/researcher/collaborators" element={<ResearcherCollaborators />} />
        <Route path="/researcher/trials" element={<ResearcherTrials />} />
        <Route path="/researcher/forums" element={<ResearcherForums />} />
        <Route path="/researcher/favorites" element={<ResearcherFavorites />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
