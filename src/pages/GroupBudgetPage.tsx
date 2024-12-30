import React from 'react';
import GroupExpenseList from '../components/budget/GroupExpenseList';
import GroupExpenseForm from '../components/budget/GroupExpenseForm';
import BalanceOverview from '../components/budget/BalanceOverview';

export default function GroupBudgetPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Group Expenses</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <BalanceOverview />
          <GroupExpenseList />
        </div>
        <div className="lg:col-span-1">
          <GroupExpenseForm />
        </div>
      </div>
    </div>
  );
}