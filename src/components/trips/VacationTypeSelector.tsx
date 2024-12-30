import React from 'react';
import { Compass, Palmtree, Mountain, Building, Camera } from 'lucide-react';
import { VacationType } from '../../types/tips';

interface VacationTypeSelectorProps {
  selectedType: VacationType;
  onTypeSelect: (type: VacationType) => void;
}

export default function VacationTypeSelector({
  selectedType,
  onTypeSelect
}: VacationTypeSelectorProps) {
  const types = [
    { id: 'leisure', label: 'Leisure', icon: Palmtree },
    { id: 'adventure', label: 'Adventure', icon: Mountain },
    { id: 'cultural', label: 'Cultural', icon: Camera },
    { id: 'urban', label: 'Urban', icon: Building },
    { id: 'mixed', label: 'Mixed', icon: Compass },
  ] as const;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">What type of vacation are you looking for?</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {types.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTypeSelect(id)}
            className={`p-4 rounded-lg border ${
              selectedType === id
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-blue-200'
            } transition-colors`}
          >
            <Icon className="h-6 w-6 mx-auto mb-2" />
            <span className="block text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}