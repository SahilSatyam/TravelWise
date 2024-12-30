import React from 'react';
import { ArrowRight } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

export default function BalanceOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-medium mb-6">Balance Overview</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">You are owed</p>
            <p className="text-xl font-semibold text-green-600">{formatCurrency(150)}</p>
          </div>
          <ArrowRight className="h-5 w-5 text-green-600" />
        </div>

        <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">You owe</p>
            <p className="text-xl font-semibold text-red-600">{formatCurrency(75)}</p>
          </div>
          <ArrowRight className="h-5 w-5 text-red-600" />
        </div>

        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Total Balance</p>
            <p className="text-xl font-semibold text-blue-600">{formatCurrency(75)}</p>
          </div>
          <ArrowRight className="h-5 w-5 text-blue-600" />
        </div>
      </div>
    </div>
  );
}