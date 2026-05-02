import React, { Suspense } from 'react';
import './App.css';
import Header from './components/header';
import TaskList from './components/TaskList';

const TaskForm = React.lazy(() => import('./components/taskForm'));
const FilterButtons = React.lazy(() => import('./components/filterButtons'));

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 p-6 md:p-10">
      <div className="max-w-xl mx-auto">
        <Header />
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-violet-100 border border-white p-6 mt-0">
          <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100 rounded-xl mb-4" />}>
            <TaskForm />
          </Suspense>
          <Suspense fallback={<div className="h-10 animate-pulse bg-gray-100 rounded-xl mb-4" />}>
            <FilterButtons />
          </Suspense>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
