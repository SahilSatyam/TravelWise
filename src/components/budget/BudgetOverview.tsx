import React from 'react';
import { PieChart, DollarSign, TrendingUp } from 'lucide-react';
import { BudgetSummary } from '../../types';
import { formatCurrency } from '../../utils/formatters';

interface BudgetOverviewProps {
  summary: BudgetSummary;
}

export default function BudgetOverview({ summary }: BudgetOverviewProps) {
  const spentPercentage = (summary.spent / summary.total) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Budget Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center text-blue-600 mb-2">
            <DollarSign className="h-5 w-5 mr-2" />
            <span className="font-medium">Total Budget</span>
          </div>
          <div className="text-2xl font-bold">{formatCurrency(summary.total)}</div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center text-green-600 mb-2">
            <TrendingUp className="h-5 w-5 mr-2" />
            <span className="font-medium">Spent</span>
          </div>
          <div className="text-2xl font-bold">{formatCurrency(summary.spent)}</div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center text-purple-600 mb-2">
            <PieChart className="h-5 w-5 mr-2" />
            <span className="font-medium">Remaining</span>
          </div>
          <div className="text-2xl font-bold">{formatCurrency(summary.remaining)}</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600">Budget Usage</span>
          <span className="text-sm font-medium">{spentPercentage.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${
              spentPercentage > 90 ? 'bg-red-600' : 'bg-blue-600'
            }`}
            style={{ width: `${Math.min(spentPercentage, 100)}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Spending by Category</h3>
        <div className="space-y-3">
          {Object.entries(summary.byCategory).map(([category, amount]) => (
            <div key={category} className="flex justify-between items-center">
              <span className="text-gray-600 capitalize">{category}</span>
              <span className="font-medium">{formatCurrency(amount)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}