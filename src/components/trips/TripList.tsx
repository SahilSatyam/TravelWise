import React from 'react';
import TripCard from '../dashboard/TripCard';
import { Trip } from '../../types';

export default function TripList() {
  // Sample data - replace with actual data
  const trips: Trip[] = [
    {
      id: '1',
      title: 'Paris Adventure',
      destination: 'Paris, France',
      startDate: '2024-06-01',
      endDate: '2024-06-07',
      budget: 3000,
      expenses: [],
      activities: []
    }
  ];

  return (
    <div className="space-y-6">
      {trips.map(trip => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}