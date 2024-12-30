import React from 'react';
import { Calendar, DollarSign, MapPin } from 'lucide-react';
import { Trip } from '../../types';
import { formatCurrency, formatDate } from '../../utils/formatters';

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  const spentAmount = trip.expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remainingBudget = trip.budget - spentAmount;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{trip.destination}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{formatDate(trip.startDate)} - {formatDate(trip.endDate)}</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-500">Budget</div>
            <div className="flex items-center text-lg font-semibold">
              <DollarSign className="h-4 w-4 mr-1" />
              {formatCurrency(trip.budget)}
            </div>
          </div>
          <div className={`text-right ${remainingBudget >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <div className="text-sm text-gray-500">Remaining</div>
            <div className="font-semibold">{formatCurrency(remainingBudget)}</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-4">
        <div className="flex justify-between text-sm">
          <span>{trip.activities.length} activities planned</span>
          <button className="text-blue-600 hover:text-blue-700">View Details →</button>
        </div>
      </div>
    </div>
  );
}