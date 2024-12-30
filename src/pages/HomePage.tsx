import React, { useEffect } from 'react';
import { ArrowRight, Globe, PiggyBank, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

export default function HomePage() {
  // Add the cursor effect for the "Start Planning" button
  useEffect(() => {
    const button = document.querySelector('.hero a');
    if (button) {
      const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position relative to the button
        const y = e.clientY - rect.top; // Y position relative to the button
        e.target.style.setProperty('--mouse-x', `${x}px`);
        e.target.style.setProperty('--mouse-y', `${y}px`);
      };

      button.addEventListener('mousemove', handleMouseMove);

      // Cleanup the event listener on component unmount
      return () => {
        button.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <h1>
          Plan Your Journey,
          <br />
          Control Your Budget
        </h1>
        <p>
          Smart travel planning with integrated budgeting and expense tracking
        </p>
        <Link to="/trips/new">
          Start Planning
          <ArrowRight />
        </Link>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        <div className="feature-card">
          <Globe />
          <h3>Trip Planning</h3>
          <p>
            Create detailed itineraries and organize your travel plans in one
            place
          </p>
        </div>

        <div className="feature-card">
          <PiggyBank />
          <h3>Budget Optimization</h3>
          <p>
            Track expenses and optimize your spending with smart budgeting tools
          </p>
        </div>

        <div className="feature-card">
          <Calendar />
          <h3>Activity Planning</h3>
          <p>
            Schedule activities and manage your daily travel agenda efficiently
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta">
        <h2>Ready to Start Your Adventure?</h2>
        <p>Join thousands of travelers who plan smarter and save more</p>
        <Link to="/auth">Create Free Account</Link>
      </div>
    </div>
  );
}
