import React from 'react';
import { MapPin, ThermometerSun } from 'lucide-react';
import { Destination } from '../../types/tips';

interface DestinationSuggestionsProps {
  destinations: Destination[];
}

export default function DestinationSuggestions({ destinations }: DestinationSuggestionsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Recommended Destinations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="rounded-lg border border-gray-200 overflow-hidden hover:border-blue-200 transition-colors"
          >
            <img
              src={destination.imageUrl}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{destination.name}</h4>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{destination.climate}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <ThermometerSun className="h-4 w-4 mr-1 text-orange-500" />
                  <span>{destination.averageTemperature.min}°-{destination.averageTemperature.max}°C</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}