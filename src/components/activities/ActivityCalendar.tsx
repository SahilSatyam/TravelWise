import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function ActivityCalendar() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium">Calendar View</h2>
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5 text-gray-400" />
          <span className="text-gray-600">June 2024</span>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {/* Calendar header */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {Array.from({ length: 35 }).map((_, i) => {
          const day = i - 4; // Adjust for month start day
          return (
            <div
              key={i}
              className={`
                aspect-square p-1 border border-gray-100
                ${day > 0 && day <= 30 ? 'bg-white' : 'bg-gray-50'}
              `}
            >
              {day > 0 && day <= 30 && (
                <div className="h-full w-full flex flex-col">
                  <span className="text-sm text-gray-600">{day}</span>
                  {/* Activity indicators would go here */}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}