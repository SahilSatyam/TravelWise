import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import TripList from '../components/trips/TripList';
import NewTripForm from '../components/trips/NewTripForm';
import NewTripDialog from '../components/trips/NewTripDialog';

export default function TripPlanningPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Trip Planning</h1>
        <button
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          onClick={() => setIsDialogOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          New Trip
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TripList />
        </div>
        <div className="lg:col-span-1">
          <NewTripForm />
        </div>
      </div>

      <NewTripDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}