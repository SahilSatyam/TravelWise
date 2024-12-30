import React from 'react';
import { Calendar, User } from 'lucide-react';
import { formatCurrency, formatDate } from '../../utils/formatters';

export default function GroupExpenseList() {
  // Sample data - replace with actual data
  const expenses = [
    {
      id: '1',
      description: 'Hotel Booking',
      amount: 450,
      paidBy: 'John Doe',
      date: new Date().toISOString(),
      category: 'accommodation',
    },
    // Add more sample expenses
  ];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h2 className="text-lg font-medium mb-6">Recent Expenses</h2>
        
        <div className="space-y-4">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{expense.description}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{expense.paidBy}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(expense.date)}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-gray-900">
                  {formatCurrency(expense.amount)}
                </div>
                <div className="text-sm text-gray-500 capitalize">
                  {expense.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}