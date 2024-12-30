import React from 'react';
import ActivityTimeline from '../components/activities/ActivityTimeline';
import ActivityForm from '../components/activities/ActivityForm';
import ActivityCalendar from '../components/activities/ActivityCalendar';

export default function ActivityPlanningPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Activity Planning</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ActivityCalendar />
          <ActivityTimeline />
        </div>
        <div className="lg:col-span-1">
          <ActivityForm />
        </div>
      </div>
    </div>
  );
}