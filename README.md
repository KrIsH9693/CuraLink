# CuraLink

**CuraLink** is a React + Tailwind CSS web application that connects patients, caregivers, and researchers in the healthcare domain, particularly for conditions like brain cancer. It provides access to experts, clinical trials, publications, and discussion forums in a streamlined dashboard.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features Implemented](#features-implemented)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Pending Features](#pending-features)

---

## Project Overview

CuraLink allows users to:

- Choose their role (Patient, Caregiver, Researcher)
- Input condition of interest (e.g., glioblastoma)
- Filter experts by location
- Access dashboards with recommended publications, relevant experts, clinical trials, and forums
- Track favorites / reading lists

The app uses **Context API** for global state and JSON files as sample data for initial development.

---

## Features Implemented

### Landing Page
- Role selection: Patient, Caregiver, Researcher
- Condition input
- Location filter (local/global)
- Navigation to onboarding or dashboard

### Patient Dashboard
- Displays onboarded patient profiles
- Shows condition, email, mobile, etc.
- Grid layout using Tailwind CSS
- Ready to integrate filtered Experts, Clinical Trials, Publications

### Researcher Dashboard
- Context structure in place for collaborators, publications, trials
- Dashboard layout similar to patient dashboard (data display pending)

### Global Context (AppContext)
- `patients` and `researchers` state
- `experts`, `trials`, `publications` state placeholders
- Functions:
  - `addPatientProfile`
  - `addResearcherProfile`
  - `addExpert`, `addTrial`, `addPublication` (ready for extension)
  
### Routing
- React Router implemented for:
  - Landing Page
  - Patient Routes: Onboarding, Dashboard, Experts, Trials, Publications, Forums, Favorites
  - Researcher Routes: Onboarding, Dashboard, Collaborators, Trials, Forums, Favorites
  - 404 Not Found page

### Components
- Navbar
- Footer
- Card
- ExpertsList, TrialsList, PublicationsList, ForumsList, FavoritesList

---

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Context API
- JSON files for mock data

---

## Project Structure

CuraLink/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Card.jsx
│  │  ├─ ExpertsList.jsx
│  │  ├─ TrialsList.jsx
│  │  ├─ PublicationsList.jsx
│  │  ├─ ForumsList.jsx
│  │  └─ FavoritesList.jsx
│  │
│  ├─ pages/
│  │  ├─ LandingPage.jsx
│  │  ├─ Patient/
│  │  │  ├─ Onboarding.jsx
│  │  │  ├─ Dashboard.jsx
│  │  │  ├─ Experts.jsx
│  │  │  ├─ Trials.jsx
│  │  │  ├─ Publications.jsx
│  │  │  ├─ Forums.jsx
│  │  │  └─ Favorites.jsx
│  │  │
│  │  ├─ Researcher/
│  │  │  ├─ Onboarding.jsx
│  │  │  ├─ Dashboard.jsx
│  │  │  ├─ Collaborators.jsx
│  │  │  ├─ Trials.jsx
│  │  │  ├─ Forums.jsx
│  │  │  └─ Favorites.jsx
│  │  │
│  │  └─ NotFound.jsx
│  │
│  ├─ data/
│  │  ├─ trials.json
│  │  ├─ publications.json
│  │  ├─ experts.json
│  │  ├─ collaborators.json
│  │  └─ forums.json
│  │
│  ├─ context/
│  │  └─ AppContext.jsx
│  │
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ README.md

## Clone Repository
git clone <repo-url>


## Navigate to Folder
cd curalink


## Install Dependencies
npm install

## Open Browser 
http://localhost:5173
