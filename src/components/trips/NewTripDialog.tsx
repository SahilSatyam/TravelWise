import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import DateRangeSelector from './DateRangeSelector';
import VacationTypeSelector from './VacationTypeSelector';
import DestinationSuggestions from './DestinationSuggestions';
import { VacationType, Destination } from '../../types/tips';

interface NewTripDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewTripDialog({ isOpen, onClose }: NewTripDialogProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [vacationType, setVacationType] = useState<VacationType>('leisure');

  // Mock destinations - In a real app, these would be filtered based on dates and type
  const destinations: Destination[] = [
    {
      id: '1',
      name: 'Bali, Indonesia',
      description: 'Perfect blend of beaches, culture, and relaxation',
      imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      climate: 'Tropical',
      bestFor: ['leisure', 'cultural'],
      averageTemperature: { min: 23, max: 31 }
    },
    {
      id: '2',
      name: 'Swiss Alps',
      description: 'Mountain adventures and breathtaking landscapes',
      imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
      climate: 'Alpine',
      bestFor: ['adventure'],
      averageTemperature: { min: 10, max: 22 }
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Plan Your Perfect Trip</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <DateRangeSelector
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
          />

          <VacationTypeSelector
            selectedType={vacationType}
            onTypeSelect={setVacationType}
          />

          {startDate && endDate && (
            <DestinationSuggestions destinations={destinations} />
          )}

          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-700"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                // Navigate to new trip form with selected details
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Continue to Trip Planning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}