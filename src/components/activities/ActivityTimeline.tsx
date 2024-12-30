import React from 'react';
import { Clock } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

export default function ActivityTimeline() {
  // Sample data - replace with actual data
  const activities = [
    {
      id: '1',
      title: 'Visit Eiffel Tower',
      date: '2024-06-01',
      time: '10:00',
      location: 'Champ de Mars, Paris',
      cost: 25,
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-lg font-medium mb-6">Activity Timeline</h2>
      
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="relative pl-8 pb-6 border-l-2 border-blue-200 last:pb-0">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900">{activity.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <Clock className="h-4 w-4 mr-1" />
                <span>{activity.time}</span>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                <div>{activity.location}</div>
                <div className="font-medium text-blue-600">{formatCurrency(activity.cost)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}