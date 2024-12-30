import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import AuthForm from './components/AuthForm';
import TripPlanningPage from './pages/TripPlanningPage';
import GroupBudgetPage from './pages/GroupBudgetPage';
import ActivityPlanningPage from './pages/ActivityPlanningPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
              <div className="w-full max-w-4xl flex rounded-2xl shadow-lg overflow-hidden bg-white">
                <div className="hidden lg:block lg:w-1/2 relative">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    alt="Beautiful beach"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h2 className="text-2xl font-bold mb-2">Discover Your Next Adventure</h2>
                      <p className="text-sm opacity-90">
                        Join our community of travelers and explore the world's most beautiful destinations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-8 sm:p-12">
                  <AuthForm />
                </div>
              </div>
            </div>
          } />
          <Route path="/trips" element={<TripPlanningPage />} />
          <Route path="/budget" element={<GroupBudgetPage />} />
          <Route path="/activities" element={<ActivityPlanningPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;