import React from 'react';
import SurveyForm from './components/SurveyForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Advanced Survey Form</h1>
        <SurveyForm />
      </div>
    </div>
  );
};

export default App;
